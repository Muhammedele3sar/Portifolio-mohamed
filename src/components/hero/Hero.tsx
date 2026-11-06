import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Cpu,
  ShieldCheck,
  Code2,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '../../data/personal';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'fullstack'>('ai');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const rotatingTitles = [
    'Full-Stack Developer',
    'AI Engineer',
    'Computer Vision Builder',
    'Enterprise Systems Architect',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [rotatingTitles.length]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-midnight-surface/90 border border-midnight-border shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono-code font-medium text-tech-slate tracking-wide">
                {personalInfo.availability.label}
              </span>
            </motion.div>

            {/* Name & Main Titles */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs sm:text-sm font-mono-code uppercase tracking-widest text-accent-cyan flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-accent-blue" />
                <span>Engineering Digital Products & Intelligent Systems</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-tech-light leading-[1.08]"
              >
                <span className="block text-tech-light">
                  {personalInfo.name}
                </span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-accent-blue via-accent-cyan to-indigo-400 bg-clip-text text-transparent">
                  Full-Stack Developer & AI Engineer
                </span>
              </motion.h1>

              {/* Dynamic Sub-role Pill */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-8 flex items-center gap-2 font-mono-code text-sm text-tech-slate"
              >
                <span className="text-accent-blue font-bold">&gt;</span>
                <span className="text-accent-cyan">specialization</span>
                <span>:</span>
                <span className="text-tech-light font-semibold underline decoration-accent-blue/50 underline-offset-4">
                  {rotatingTitles[typewriterIndex]}
                </span>
              </motion.div>
            </div>

            {/* Headline Quote & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-lg sm:text-xl font-medium text-tech-light/90 leading-snug border-l-2 border-accent-blue pl-4">
                &ldquo;{personalInfo.heroHeadline}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-tech-slate leading-relaxed">
                {personalInfo.heroDescription}
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-accent-blue hover:bg-accent-hover text-white flex items-center gap-2 shadow-glow-blue transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenCV}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-midnight-surface border border-midnight-border text-tech-light hover:border-accent-blue/50 hover:bg-midnight-card transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download CV</span>
              </button>

              {/* Additional CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3.5 rounded-xl font-medium text-sm text-tech-slate hover:text-tech-light transition-colors hover:underline underline-offset-8"
              >
                Let&apos;s Connect
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-midnight-border/70 max-w-lg"
            >
              {personalInfo.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xs uppercase font-mono-code text-tech-slate">
                    {metric.label}
                  </div>
                  <div className="text-sm font-bold text-tech-light">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-tech-slate/80 truncate">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Midnight Tech Console & Visual Profile (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative space-y-4"
          >
            {/* Engineer Profile Highlight Card */}
            <div className="relative rounded-2xl bg-midnight-card/95 border border-midnight-border/90 p-4 shadow-xl backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-accent-blue/60 shadow-glow-blue shrink-0 group">
                  <img
                    src="/Photos/mohamed-noureldin.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-tech-light">
                      {personalInfo.name}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-accent-cyan font-mono-code">
                    AI Engineer &bull; Full-Stack Builder
                  </p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono-code text-tech-slate hover:text-accent-blue transition-colors mt-0.5"
                  >
                    <span>github.com/Muhammedele3sar</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                  AVAILABLE
                </span>
                <span className="text-[11px] font-mono-code text-tech-slate">
                  Luxor, Egypt
                </span>
              </div>
            </div>

            {/* Tech Console Window */}
            <div className="relative rounded-2xl bg-midnight-card border border-midnight-border shadow-2xl overflow-hidden font-mono-code text-xs text-tech-slate">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-midnight-surface border-b border-midnight-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-tech-slate font-medium ml-2">
                    nour-engine://telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* View Selector Tabs */}
              <div className="flex border-b border-midnight-border bg-midnight-surface/40">
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex-1 py-2 text-center text-xs font-medium border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'ai'
                      ? 'border-accent-blue text-accent-cyan bg-accent-blue/5'
                      : 'border-transparent text-tech-slate hover:text-tech-light'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI & Vision Pipeline</span>
                </button>
                <button
                  onClick={() => setActiveTab('fullstack')}
                  className={`flex-1 py-2 text-center text-xs font-medium border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'fullstack'
                      ? 'border-accent-blue text-accent-cyan bg-accent-blue/5'
                      : 'border-transparent text-tech-slate hover:text-tech-light'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Full-Stack Architecture</span>
                </button>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-5 space-y-4 min-h-[340px]">
                {activeTab === 'ai' ? (
                  <div className="space-y-3.5">
                    <div className="text-tech-slate">
                      <span className="text-accent-blue font-bold">$</span> python run_pipeline.py --model=yolov8 --mode=realtime
                    </div>

                    {/* Simulated Diagnostics Grid */}
                    <div className="p-3.5 rounded-xl bg-midnight-surface/80 border border-midnight-border/80 space-y-2.5">
                      <div className="flex items-center justify-between text-tech-light font-sans font-semibold">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                          ExamGuard Vision Engine
                        </span>
                        <span className="text-[11px] text-accent-cyan font-mono-code">60 FPS</span>
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-tech-slate">Gaze Vector (Yaw/Pitch):</span>
                          <span className="text-emerald-400 font-semibold">Normal (3.2&deg;, -1.1&deg;)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-tech-slate">Multi-Face Check:</span>
                          <span className="text-emerald-400 font-semibold">Single Subject (99.4%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-tech-slate">Object Proximity:</span>
                          <span className="text-tech-light font-semibold">No Phone / Notes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-tech-slate">Inference Latency:</span>
                          <span className="text-accent-blue font-semibold">14.2 ms / frame</span>
                        </div>
                      </div>
                    </div>

                    {/* Model Architecture Stack */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] text-tech-slate uppercase tracking-wider">
                        Active Machine Learning Stack:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40 text-[11px]">
                          YOLOv8
                        </span>
                        <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 text-[11px]">
                          OpenCV
                        </span>
                        <span className="px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/40 text-[11px]">
                          PyTorch
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[11px]">
                          WebSockets
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Integrity protocol verified &bull; 0 false alerts</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <div className="text-tech-slate">
                      <span className="text-accent-blue font-bold">$</span> agy status --services --all
                    </div>

                    {/* Full Stack Services Grid */}
                    <div className="p-3.5 rounded-xl bg-midnight-surface/80 border border-midnight-border/80 space-y-2">
                      <div className="flex justify-between items-center text-tech-light">
                        <span className="text-accent-cyan font-sans font-semibold">React Frontend SPA</span>
                        <span className="text-emerald-400 text-[10px] font-bold">200 OK</span>
                      </div>
                      <div className="flex justify-between items-center text-tech-light">
                        <span className="text-accent-blue font-sans font-semibold">Laravel REST APIs</span>
                        <span className="text-emerald-400 text-[10px] font-bold">200 OK</span>
                      </div>
                      <div className="flex justify-between items-center text-tech-light">
                        <span className="text-purple-400 font-sans font-semibold">MySQL Relational DB</span>
                        <span className="text-emerald-400 text-[10px] font-bold">SYNCED</span>
                      </div>
                      <div className="flex justify-between items-center text-tech-light">
                        <span className="text-sky-400 font-sans font-semibold">Electron Native Shell</span>
                        <span className="text-emerald-400 text-[10px] font-bold">READY</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] text-tech-slate uppercase tracking-wider">
                        Production Solutions:
                      </div>
                      <div className="text-[11px] text-tech-light">
                        &bull; Travora Fleet Dispatch &bull; Hamza Suit POS &bull; Bayader ERP
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-accent-cyan flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Clean separation of concerns &bull; Strict TypeScript</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-midnight-surface/60 border-t border-midnight-border flex items-center justify-between text-[11px] text-tech-slate">
                <span>Location: Luxor, Egypt</span>
                <span className="text-accent-cyan font-medium">Node v20.x &bull; Python 3.11</span>
              </div>
            </div>

            {/* Decorative Floating Tech Badges */}
            <div className="hidden sm:block absolute -top-5 -right-5 px-3 py-1.5 rounded-xl bg-midnight-surface border border-accent-blue/30 shadow-glow-blue text-xs font-mono-code text-accent-cyan backdrop-blur-md">
              ⚡ React + PyTorch
            </div>
            <div className="hidden sm:block absolute -bottom-5 -left-5 px-3 py-1.5 rounded-xl bg-midnight-surface border border-accent-cyan/30 shadow-glow-cyan text-xs font-mono-code text-emerald-400 backdrop-blur-md">
              🔒 100% Authentic Code
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

