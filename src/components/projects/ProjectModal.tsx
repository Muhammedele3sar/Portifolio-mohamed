import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle,
  Cpu,
  Layers,
  Shield,
  Lock,
  Activity,
  UserCheck,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.35 }}
          className="relative w-full max-w-3xl bg-midnight-card rounded-2xl border border-midnight-border shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Image / Visual */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-midnight-surface">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  // Fallback if local image not synced yet
                  (e.target as HTMLElement).style.display = 'none';
                }}
                className="w-full h-full object-cover object-top"
              />
            ) : null}
            {/* Gradient overlay - subtle bottom darkening for title readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            {/* Badges on Top */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/90 text-white backdrop-blur-md shadow-sm">
                {project.badge || project.category.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-tech-light backdrop-blur-md border border-white/10">
                Status: {project.status}
              </span>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title banner at bottom of image */}
            <div className="absolute bottom-4 left-6 right-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-accent-cyan font-mono-code mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Long Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-tech-slate leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* My Role & Contributions */}
            {project.role && (
              <div className="p-4 rounded-xl bg-midnight-surface/80 border border-midnight-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-tech-light font-semibold">
                  <UserCheck className="w-4 h-4 text-accent-cyan" />
                  <span>MY ROLE & CONTRIBUTIONS</span>
                </div>
                <p className="text-xs sm:text-sm text-tech-slate leading-relaxed">
                  {project.role}
                </p>
              </div>
            )}

            {/* Architectural Notes & System Integration */}
            {project.architectureNotes && (
              <div className="p-4 rounded-xl bg-midnight-surface/80 border border-midnight-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-tech-light font-semibold">
                  <Layers className="w-4 h-4 text-accent-blue" />
                  <span>SYSTEM ARCHITECTURE & INTEGRATION</span>
                </div>
                <p className="text-xs sm:text-sm text-tech-slate leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="p-4 rounded-xl bg-midnight-surface/80 border border-midnight-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-tech-light font-semibold">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>ENGINEERING CHALLENGES & SOLUTIONS</span>
                </div>
                <p className="text-xs sm:text-sm text-tech-slate leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
                Key Technical Capabilities & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-tech-slate"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono-code bg-midnight-surface border border-midnight-border text-tech-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className="p-6 border-t border-midnight-border bg-midnight-surface/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-tech-slate">
              {project.isPrivateRepo ? (
                <span className="flex items-center gap-1.5 text-tech-slate">
                  <Lock className="w-3.5 h-3.5" />
                  Enterprise / Client Protected Codebase
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5" />
                  Code available upon technical review
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-tech-light bg-midnight-surface border border-midnight-border hover:border-accent-blue/40 flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              ) : (
                <span className="px-3 py-1.5 rounded-xl text-xs font-mono-code text-tech-slate bg-midnight-surface/80 border border-midnight-border/60">
                  Confidential IP
                </span>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-accent-blue hover:bg-accent-hover shadow-glow-blue flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              ) : (
                <button
                  onClick={() => alert('Detailed architecture review is available upon interview.')}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-accent-blue hover:bg-accent-hover shadow-glow-blue flex items-center gap-1.5 transition-colors"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Architecture Overview</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
