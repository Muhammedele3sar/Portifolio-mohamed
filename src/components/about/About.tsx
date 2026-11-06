import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Cpu,
  Code,
  MapPin,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { educationData } from '../../data/education';

export const About: React.FC = () => {
  const engineeringPillars = [
    {
      title: 'Full-Stack Architecture',
      description:
        'Building responsive, modular frontends in React paired with reliable backends in PHP/Laravel and Python.',
      icon: Code,
    },
    {
      title: 'Applied AI & Computer Vision',
      description:
        'Designing end-to-end ML pipelines with YOLOv8, PyTorch, and OpenCV to solve concrete perception challenges.',
      icon: Cpu,
    },
    {
      title: 'Business & ERP Systems',
      description:
        'Engineering point-of-sale, fleet dispatch, and enterprise resource management systems that optimize operational workflows.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">01.</span>
            <span>Identity & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            About Mohamed Noureldin
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Storytelling (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-tech-slate leading-relaxed">
            <div className="space-y-4 text-base sm:text-lg">
              {personalInfo.aboutStory.map((paragraph, idx) => (
                <p key={idx} className="text-tech-slate">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Engineering Mindset */}
            <div className="p-6 rounded-2xl bg-midnight-surface/80 border border-midnight-border space-y-4">
              <h3 className="text-sm font-mono-code font-semibold uppercase tracking-wider text-accent-cyan flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-blue" />
                The Engineering Standard
              </h3>
              <p className="text-sm text-tech-slate">
                I believe that software should not only look refined but also perform predictably under pressure. From writing clean TypeScript interfaces to architecting YOLOv8 proctoring models and structuring SQL databases, I prioritize durability, maintainability, and measurable utility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-tech-light">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Strict type-safety & semantic code</span>
                </div>
                <div className="flex items-center gap-2 text-tech-light">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Practical AI, not superficial buzzwords</span>
                </div>
                <div className="flex items-center gap-2 text-tech-light">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Business workflow optimization</span>
                </div>
                <div className="flex items-center gap-2 text-tech-light">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Continuous learning & problem solving</span>
                </div>
              </div>
            </div>

            {/* Quick Facts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-midnight-card border border-midnight-border">
                <div className="flex items-center gap-2.5 text-xs font-mono-code text-accent-blue mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>LOCATION</span>
                </div>
                <div className="text-sm font-semibold text-tech-light">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-tech-slate mt-0.5">Available for on-site & remote roles</div>
              </div>

              <div className="p-4 rounded-xl bg-midnight-card border border-midnight-border">
                <div className="flex items-center gap-2.5 text-xs font-mono-code text-accent-cyan mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMICS</span>
                </div>
                <div className="text-sm font-semibold text-tech-light">
                  {educationData.institution}
                </div>
                <div className="text-xs text-tech-slate mt-0.5">
                  B.Sc. in Computer Science & AI (Grade: Excellent)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Identity & Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Presentation Card */}
            <div className="p-6 rounded-2xl bg-midnight-card border border-midnight-border shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-midnight-border pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent-blue/50 shadow-glow-blue shrink-0 bg-midnight-surface group">
                    <img
                      src="/Photos/mohamed-noureldin.jpg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tech-light text-base">
                      {personalInfo.name}
                    </h4>
                    <p className="text-xs font-mono-code text-accent-cyan">
                      Full-Stack &bull; AI Engineer
                    </p>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code text-tech-slate hover:text-accent-blue mt-0.5 transition-colors"
                    >
                      <span>@Muhammedele3sar</span>
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Pillars Breakdown */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono-code uppercase tracking-wider text-tech-slate">
                  Engineering Pillars
                </h5>
                {engineeringPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-midnight-surface/60 border border-midnight-border/60 space-y-1 hover:border-accent-blue/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-semibold text-sm text-tech-light">
                        <Icon className="w-4 h-4 text-accent-blue shrink-0" />
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-xs text-tech-slate pl-6 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Status Indicator */}
              <div className="pt-2 border-t border-midnight-border flex items-center justify-between text-xs text-tech-slate">
                <span>Working Arrangement:</span>
                <span className="text-tech-light font-medium">
                  Full-time &bull; Contract &bull; Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
