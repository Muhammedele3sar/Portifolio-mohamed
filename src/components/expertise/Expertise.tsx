import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Server,
  Cpu,
  Wrench,
  Check,
  Terminal,
  Zap,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const getIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'ai':
        return <Cpu className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">02.</span>
            <span>Core Competencies & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
          <p className="text-tech-slate max-w-2xl mt-2 text-sm sm:text-base">
            Organized across specialized domains without arbitrary percentage meters. Each technology reflects active production experience, architectural depth, and verified implementations.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-midnight-surface/80 border border-midnight-border w-fit">
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'text-white'
                    : 'text-tech-slate hover:text-tech-light'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-accent-blue rounded-xl shadow-glow-blue"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{getIcon(cat.id)}</span>
                <span className="relative z-10">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Domain Overview Header */}
            <div className="p-6 rounded-2xl bg-midnight-card border border-midnight-border flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
              <div className="space-y-1">
                <span className="text-xs font-mono-code text-accent-cyan tracking-wider uppercase">
                  Domain Discipline
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-tech-light">
                  {currentCategory.title}
                </h3>
                <p className="text-sm text-tech-slate">{currentCategory.subtitle}</p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap gap-2 max-w-lg">
                {currentCategory.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-midnight-surface border border-midnight-border text-tech-light flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Individual Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-midnight-surface/60 border border-midnight-border/70 hover:border-accent-blue/50 transition-all hover:-translate-y-1 group shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold text-tech-light group-hover:text-accent-cyan transition-colors">
                      {skill.name}
                    </h4>
                    {skill.tag && (
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-blue/20">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  {skill.levelDescription && (
                    <p className="text-xs text-tech-slate leading-relaxed">
                      {skill.levelDescription}
                    </p>
                  )}
                  <div className="mt-4 pt-3 border-t border-midnight-border/40 flex items-center gap-1.5 text-[11px] font-mono-code text-tech-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    <span>Production Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

