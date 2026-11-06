import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2, Folder } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Array<{ id: ProjectCategory; label: string }> = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Computer Vision' },
    { id: 'fullstack', label: 'Full-Stack Platforms' },
    { id: 'enterprise', label: 'Enterprise ERP & POS' },
    { id: 'frontend', label: 'Web Applications' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">03.</span>
            <span>Featured Engineering Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
          <p className="text-tech-slate max-w-2xl mt-2 text-sm sm:text-base">
            Engineered systems spanning real-time AI computer vision proctoring, commercial tourism platforms, and enterprise-grade retail POS systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${isActive
                  ? 'bg-accent-blue text-white shadow-glow-blue'
                  : 'bg-midnight-surface/80 border border-midnight-border text-tech-slate hover:text-tech-light'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col rounded-2xl bg-midnight-card border border-midnight-border overflow-hidden hover:border-accent-blue/50 transition-all duration-300 hover:shadow-card-dark"
              >
                {/* Visual Header / Screenshot */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-52 w-full overflow-hidden bg-midnight-surface cursor-pointer flex items-center justify-center"
                >
                  {/* Subtle Tech Grid Background Fallback */}
                  <div className="absolute inset-0 tech-grid-bg opacity-30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-tech-slate/50 gap-2">
                    <Folder className="w-8 h-8 text-accent-blue/40" />
                    <span className="text-xs font-mono-code">{project.title}</span>
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}

                  {/* Gradient Overlay - Subtle vignette that keeps image fully visible */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-30">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-code font-semibold bg-midnight-bg/90 text-accent-cyan border border-midnight-border backdrop-blur-md">
                      {project.badge || project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Action Quick Pill */}
                  <div className="absolute bottom-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-accent-blue text-white shadow-glow-blue flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold text-tech-light group-hover:text-accent-cyan transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-midnight-surface text-tech-slate border border-midnight-border/60">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs font-mono-code text-accent-blue line-clamp-1">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-tech-slate line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-4 pt-2 border-t border-midnight-border/50">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-midnight-surface text-tech-slate border border-midnight-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[11px] font-mono-code text-tech-slate">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-accent-cyan hover:text-accent-blue transition-colors flex items-center gap-1"
                      >
                        <span>Full Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.isPrivateRepo ? (
                          <span className="text-[11px] font-mono-code text-tech-slate">
                            Enterprise IP
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;