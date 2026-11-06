import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length !== 0) return;

    setSubmitting(true);
    setSubmitError(false);

    try {
      // Send via Web3Forms — works from localhost & production, no domain verification needed
      // Delivers instantly to mohameddnourr235@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '91b5c7a4-7580-4a0e-ae49-0f907eedd3f1',
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio] ${formData.subject}`,
          message: formData.message,
          from_name: 'Mohamed Portfolio Website',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data?.message || 'Submission failed');
      }
    } catch (_err) {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">08.</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-tech-light tracking-tight">
            Have an Idea? Let&apos;s Build Something Intelligent.
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
          <p className="text-tech-slate max-w-2xl mt-2 text-sm sm:text-base">
            Whether you are looking to build a high-performance web application, integrate custom computer vision models, or develop a tailored business ERP solution, I am open to discussing new engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* Email Card with Copy Feature */}
              <div className="p-5 rounded-2xl bg-midnight-card border border-midnight-border shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan">
                    <Mail className="w-4 h-4 text-accent-blue" />
                    <span>DIRECT INBOX</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-tech-slate hover:text-tech-light hover:bg-midnight-surface transition-colors text-xs flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono-code">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="font-mono-code">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-base font-bold text-tech-light hover:text-accent-blue transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-midnight-card border border-midnight-border shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan">
                  <MapPin className="w-4 h-4 text-accent-blue" />
                  <span>LOCATION</span>
                </div>
                <div className="text-base font-bold text-tech-light">
                  {personalInfo.location}
                </div>
                <p className="text-xs text-tech-slate">
                  Available for local engagements in Egypt & remote work worldwide
                </p>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-2xl bg-midnight-surface/80 border border-midnight-border space-y-4">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
                Professional Networks
              </h4>
              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-midnight-card border border-midnight-border/70 hover:border-accent-blue transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-tech-light group-hover:text-accent-blue transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-xs text-tech-slate font-mono-code">
                        mohamed-nour-1551a6284
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-tech-slate group-hover:text-accent-blue transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-midnight-card border border-midnight-border/70 hover:border-accent-blue transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/10 flex items-center justify-center text-slate-300 dark:text-slate-300">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-tech-light group-hover:text-accent-blue transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs text-tech-slate font-mono-code">
                        Muhammedele3sar
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-tech-slate group-hover:text-accent-blue transition-colors" />
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-midnight-card border border-midnight-border/70 hover:border-emerald-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-tech-light group-hover:text-emerald-400 transition-colors">
                        WhatsApp Instant
                      </div>
                      <div className="text-xs text-tech-slate font-mono-code">
                        Direct Messaging
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-tech-slate group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-midnight-card border border-midnight-border shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-tech-light">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-tech-slate">
                  Fill in your details below. Your message will be delivered directly to my email inbox.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent Successfully! ✓</span>
                  </div>
                  <p className="text-xs sm:text-sm text-tech-slate leading-relaxed">
                    Thank you! Your message was delivered directly to my inbox at{' '}
                    <strong className="text-tech-light">{personalInfo.email}</strong>.
                    I will get back to you shortly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono-code text-accent-cyan underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : submitError ? (
                <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-800/50 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                    <AlertCircle className="w-5 h-5" />
                    <span>Sending Failed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-tech-slate leading-relaxed">
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-accent-blue underline">
                      {personalInfo.email}
                    </a>{' '}
                    or try again.
                  </p>
                  <button
                    onClick={() => setSubmitError(false)}
                    className="text-xs font-mono-code text-accent-cyan underline underline-offset-4"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-tech-slate">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-3 rounded-xl bg-midnight-surface border border-midnight-border text-sm text-tech-light focus:outline-none focus:border-accent-blue transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-tech-slate">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-midnight-surface border border-midnight-border text-sm text-tech-light focus:outline-none focus:border-accent-blue transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-tech-slate">
                      PROJECT SUBJECT *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI System Integration / Web Platform"
                      className="w-full px-4 py-3 rounded-xl bg-midnight-surface border border-midnight-border text-sm text-tech-light focus:outline-none focus:border-accent-blue transition-colors"
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-tech-slate">
                      MESSAGE DETAILS *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, technical scope, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-midnight-surface border border-midnight-border text-sm text-tech-light focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm bg-accent-blue hover:bg-accent-hover disabled:opacity-50 text-white flex items-center justify-center gap-2 shadow-glow-blue transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Sending...' : 'Send Message to Mohamed'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
