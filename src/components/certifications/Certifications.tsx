import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { certifications } from '../../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">07.</span>
            <span>Accredited Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            Certifications & Training
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
          <p className="text-tech-slate max-w-2xl mt-2 text-sm sm:text-base">
            Verified technical specializations across deep neural networks, frontend engineering, data science, and algorithmic problem solving.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-midnight-card border border-midnight-border hover:border-accent-blue/50 transition-all hover:-translate-y-1 group shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono-code px-2.5 py-0.5 rounded-full bg-midnight-surface text-tech-slate border border-midnight-border">
                    <Calendar className="w-3 h-3 text-accent-cyan" />
                    <span>{cert.year}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-accent-cyan">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-tech-light group-hover:text-accent-blue transition-colors">
                    {cert.title}
                  </h3>
                  {cert.credentialNote && (
                    <p className="text-xs text-tech-slate">{cert.credentialNote}</p>
                  )}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-midnight-border/50 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-midnight-surface text-tech-slate border border-midnight-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-emerald-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Curriculum</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

