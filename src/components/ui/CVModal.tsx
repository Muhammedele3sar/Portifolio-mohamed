import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle, ExternalLink, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { educationData } from '../../data/education';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="relative w-full max-w-2xl bg-midnight-card rounded-2xl border border-midnight-border shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-midnight-border bg-midnight-surface/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tech-light">
                  Curriculum Vitae Preview
                </h3>
                <p className="text-xs text-tech-slate">
                  {personalInfo.name} — {personalInfo.primaryTitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-tech-slate hover:text-tech-light hover:bg-midnight-surface transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            <div className="p-4 rounded-xl bg-midnight-surface/80 border border-midnight-border">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <h4 className="font-semibold text-tech-light">
                  {personalInfo.name}
                </h4>
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-blue/20">
                  Verified Engineering Profile
                </span>
              </div>
              <p className="text-sm text-tech-slate mb-3">{personalInfo.positioning}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-tech-slate">
                <div>📍 <strong className="text-tech-light">Location:</strong> {personalInfo.location}</div>
                <div>🎓 <strong className="text-tech-light">Degree:</strong> CS & AI (South Valley)</div>
                <div>✉️ <strong className="text-tech-light">Email:</strong> {personalInfo.email}</div>
                <div>💼 <strong className="text-tech-light">Focus:</strong> Full-Stack & Machine Learning</div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                Key Qualifications
              </h5>
              <ul className="space-y-2 text-sm text-tech-slate">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <span>Bachelor's in Computer Science & Artificial Intelligence with Excellent Graduation Distinction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <span>Architect of ExamGuard: Real-time AI Proctoring pipeline using YOLOv8 & Computer Vision.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <span>Full-Stack experience developing production web apps with React, TypeScript, PHP & Laravel.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-midnight-border bg-midnight-surface/50 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-tech-slate">
              Need a tailored resume version?
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}?subject=Resume Request - Mohamed Noureldin`}
                className="px-4 py-2 rounded-xl text-xs font-medium text-tech-slate hover:text-tech-light border border-midnight-border hover:border-accent-blue/40 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                Request Specific Format
              </a>
              <a
                href="/cv-mohamed-noureldin.pdf"
                download="MOHAMED_NOURELDIN_CV.pdf"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-accent-blue hover:bg-accent-hover text-white flex items-center gap-1.5 transition-colors shadow-glow-blue"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

