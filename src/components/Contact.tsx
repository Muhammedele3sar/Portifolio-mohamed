import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send via EmailJS
      const templateParams = {
        to_name: 'Mohamed Nour',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const serviceId = 'YOUR_SERVICE_ID'; // استبدل بـ Service ID الخاص بك من EmailJS
      const templateId = 'YOUR_TEMPLATE_ID'; // استبدل بـ Template ID الخاص بك من EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // استبدل بـ Public Key الخاص بك من EmailJS

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mohammednor',
      icon: '🔗',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohammednor',
      icon: '💼',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mohammednor',
      icon: '🐦',
      color: '#1DA1F2'
    },
    {
      name: 'Email',
      url: 'mailto:mohameddnourr235@gmail.com',
      icon: '📧',
      color: '#EA4335'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/201014934909',
      icon: '💬',
      color: '#25D366'
    }
  ];

  const getContactInfo = () => [
    {
      icon: '📍',
      label: t('contact.location'),
      value: 'luxor, Egypt',
      description: language === 'ar' ? 'متاح للعمل عن بُعد عالمياً' : 'Available for remote work worldwide'
    },
    {
      icon: '📧',
      label: t('contact.email'),
      value: 'mohameddnourr235@gmail.com',
      description: language === 'ar' ? 'أفضل طريقة للتواصل معي' : 'Best way to reach me'
    },
    {
      icon: '📱',
      label: t('contact.phone'),
      value: '+20 1014934909',
      description: language === 'ar' ? 'متاح خلال ساعات العمل' : 'Available during business hours'
    },
    {
      icon: '🌐',
      label: t('contact.timezone'),
      value: 'GMT+2 (Cairo)',
      description: language === 'ar' ? 'عادة متصل 9 ص - 7 م' : 'Usually online 9 AM - 7 PM',
    }
  ];

  const contactInfo = getContactInfo();

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">04.</span>
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="contact-intro">
          <h3>{t('contact.subtitle')}</h3>
          <p>
            {t('contact.description')}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-header">
              <h3>{t('contact.form.title')}</h3>
              <p>{t('contact.form.description')}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={language === 'ar' ? 'الاسم الكامل' : 'Your full name'}
                  />
                  <div className="input-border"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'your.email@example.com'}
                  />
                  <div className="input-border"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">{language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder={language === 'ar' ? '+20 XXX XXX XXXX' : '+20 XXX XXX XXXX'}
                />
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={language === 'ar' ? 'عنوان الرسالة' : "What's this about?"}
                />
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder={language === 'ar' ? 'أخبرني عن مشروعك أو فقط قل مرحباً...' : 'Tell me about your project or just say hello...'}
                ></textarea>
                <div className="input-border"></div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <span>{t('contact.form.send')}</span>
                    <span className="btn-icon">🚀</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ {t('contact.form.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  ❌ {t('contact.form.error')}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-header">
              <h3>{t('contact.info.title')}</h3>
              <p>{t('contact.info.description')}</p>
            </div>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.label}</h4>
                    <p className="info-value">{info.value}</p>
                    <span className="info-description">{info.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>{t('contact.social.title')}</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                    <div className="social-glow"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-header">
                <div className="status-indicator">
                  <span className="status-dot available"></span>
                  <span>{t('contact.available')}</span>
                </div>
              </div>
              <p>
                {t('contact.available.description')}
              </p>
              <div className="quick-actions">
                <a href="mailto:mohamed@example.com" className="quick-btn">
                  📧 Quick Email
                </a>
                <a href="/resume.pdf" target="_blank" className="quick-btn">
                  📄 Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="gradient-text">{'<MN/>'}</span>
            </div>
            <p>{t('footer.built')}</p>
            <div className="footer-links">
              <a href="#hero">{t('footer.back')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
