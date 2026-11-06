"""
Portfolio Backend Server with SQLite Database and Email Dispatch
Zero external dependencies required (Uses Python built-in standard library).
"""

import http.server
import json
import os
import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

PORT = int(os.environ.get("PORT", 5000))
DB_PATH = os.path.join(os.path.dirname(__file__), "messages.db")

# SMTP Configuration (Optional: set environment variables or defaults)
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 587))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "mohameddnourr235@gmail.com")


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            ip_address TEXT,
            status TEXT DEFAULT 'received',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()


def save_message(name, email, subject, message, client_ip):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO contact_messages (name, email, subject, message, ip_address, status)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (name, email, subject, message, client_ip, 'stored'))
    message_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return message_id


def send_email_notification(name, email, subject, message):
    if not SMTP_USER or not SMTP_PASS:
        # SMTP credentials not configured yet, messages are safely kept in SQLite database
        return False, "SMTP credentials not configured"

    try:
        msg = MIMEMultipart()
        msg["From"] = f"Portfolio Contact <{SMTP_USER}>"
        msg["To"] = RECIPIENT_EMAIL
        msg["Reply-To"] = email
        msg["Subject"] = f"New Portfolio Inquiry: {subject}"

        html_body = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #fafafa;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">New Contact Message Received</h2>
            <p><strong>From:</strong> {name} (&lt;<a href="mailto:{email}">{email}</a>&gt;)</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Received At:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
            <div style="margin-top: 15px; padding: 15px; background: #ffffff; border-radius: 8px; border-left: 4px solid #2563eb;">
                <p style="white-space: pre-wrap; margin: 0; color: #333333;">{message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #888888;">This message was stored securely in your portfolio SQLite database.</p>
        </div>
        """
        msg.attach(MIMEText(html_body, "html"))

        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
        server.quit()
        return True, "Email sent successfully"
    except Exception as e:
        return False, str(e)


class PortfolioRequestHandler(http.server.BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors_headers()
        self.end_headers()

    def do_GET(self):
        self._send_cors_headers()

        if self.path == "/" or self.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            response = {
                "status": "healthy",
                "service": "Portfolio Backend API & SQLite DB",
                "recipient": RECIPIENT_EMAIL,
                "timestamp": datetime.now().isoformat()
            }
            self.wfile.write(json.dumps(response).encode("utf-8"))
            return

        elif self.path == "/api/messages":
            # Protected or admin listing of saved messages
            try:
                conn = sqlite3.connect(DB_PATH)
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                cursor.execute("SELECT id, name, email, subject, message, created_at, status FROM contact_messages ORDER BY id DESC")
                rows = cursor.fetchall()
                messages = [dict(row) for row in rows]
                conn.close()

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"count": len(messages), "messages": messages}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

    def do_POST(self):
        self._send_cors_headers()

        if self.path == "/api/contact":
            try:
                content_length = int(self.headers.get("Content-Length", 0))
                post_data = self.rfile.read(content_length)
                payload = json.loads(post_data.decode("utf-8"))

                name = str(payload.get("name", "")).strip()
                email = str(payload.get("email", "")).strip()
                subject = str(payload.get("subject", "")).strip()
                message = str(payload.get("message", "")).strip()

                if not name or not email or not subject or not message:
                    self.send_response(400)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "All fields (name, email, subject, message) are required"}).encode("utf-8"))
                    return

                # 1. Save directly to SQLite Database
                client_ip = self.client_address[0] if self.client_address else "unknown"
                msg_id = save_message(name, email, subject, message, client_ip)

                # 2. Try sending email notification
                email_sent, email_log = send_email_notification(name, email, subject, message)

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                response = {
                    "success": True,
                    "message": "Your message has been stored safely in the database and processed.",
                    "id": msg_id,
                    "emailDispatched": email_sent,
                    "notes": email_log
                }
                self.wfile.write(json.dumps(response).encode("utf-8"))

            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": f"Internal server error: {str(e)}"}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()


if __name__ == "__main__":
    init_db()
    print(f"[*] Portfolio SQLite Database initialized at: {DB_PATH}")
    print(f"[*] Portfolio Backend API running on port: {PORT}")
    server = http.server.ThreadingHTTPServer(("0.0.0.0", PORT), PortfolioRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] Server shutting down.")

