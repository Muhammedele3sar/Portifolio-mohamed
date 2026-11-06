import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Laptop,
  CheckCircle,
  Building,
} from 'lucide-react';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">05.</span>
            <span>Career & Verified Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
          <p className="text-tech-slate max-w-2xl mt-2 text-sm sm:text-base">
            Verified engineering milestones across software firms, full-stack web platforms, and frontend design systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-midnight-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-midnight-bg border-2 border-accent-blue flex items-center justify-center group-hover:scale-125 group-hover:border-accent-cyan transition-all shadow-glow-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-midnight-card border border-midnight-border hover:border-accent-blue/40 transition-all shadow-sm space-y-4">
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-midnight-border/60 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-tech-light">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-accent-blue font-semibold text-sm">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-midnight-surface text-tech-slate border border-midnight-border">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{exp.period}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-accent-blue/10 text-accent-cyan border border-accent-blue/20">
                      <Laptop className="w-3.5 h-3.5" />
                      <span>{exp.workType}</span>
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-tech-slate">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>{exp.location}</span>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2 pt-1">
                  {exp.description.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-tech-slate leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-midnight-border/40">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-midnight-surface text-tech-slate border border-midnight-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

