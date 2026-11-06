import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  CheckCircle,
  Cpu,
} from 'lucide-react';
import { educationData } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">06.</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            Education & Academic Focus
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
        </div>

        {/* Education Hero Showcase Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-midnight-card border border-midnight-border shadow-xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-midnight-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0 shadow-glow-blue">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
                  {educationData.department}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-tech-light">
                  {educationData.degree}
                </h3>
                <p className="text-base font-semibold text-tech-slate">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code bg-midnight-surface text-tech-slate border border-midnight-border">
                <Calendar className="w-4 h-4 text-accent-cyan" />
                <span>{educationData.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-mono-code bg-emerald-950/70 text-emerald-400 border border-emerald-800/40">
                <Award className="w-4 h-4" />
                <span>Project Grade: {educationData.graduationProjectGrade}</span>
              </span>
            </div>
          </div>

          {/* Academic Highlights & Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h4 className="text-sm font-mono-code uppercase tracking-wider text-accent-cyan flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent-blue" />
                Academic Specialization & Curricula
              </h4>
              <p className="text-sm text-tech-slate leading-relaxed">
                Focused heavily on mathematical foundations, computer vision algorithms, deep neural network architectures, and distributed systems.
              </p>
              <div className="space-y-2.5 pt-2">
                {educationData.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-tech-slate leading-relaxed"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graduation Project Distinction Box */}
            <div className="p-6 rounded-2xl bg-midnight-surface/80 border border-midnight-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-accent-cyan uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-accent-blue" />
                  Graduation Capstone
                </span>
                <span className="text-xs font-mono-code font-bold text-emerald-400">
                  Grade: Excellent
                </span>
              </div>
              <h5 className="text-lg font-bold text-tech-light">
                {educationData.graduationProjectName}
              </h5>
              <p className="text-xs sm:text-sm text-tech-slate leading-relaxed">
                {educationData.graduationProjectDescription}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono-code text-accent-cyan">
                <span className="px-2 py-0.5 rounded bg-midnight-card border border-midnight-border">
                  Python YOLOv8
                </span>
                <span className="px-2 py-0.5 rounded bg-midnight-card border border-midnight-border">
                  React Dashboard
                </span>
                <span className="px-2 py-0.5 rounded bg-midnight-card border border-midnight-border">
                  Computer Vision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

