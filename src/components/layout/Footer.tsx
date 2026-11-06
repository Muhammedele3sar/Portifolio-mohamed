import React from 'react';
import {
  ArrowUp,
  Mail,
  Heart,
  Terminal,
  Code2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personal';
import { navItems } from '../../data/navigation';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-midnight-border bg-midnight-bg py-16 px-4 sm:px-6 lg:px-8 text-tech-slate transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Identity & Positioning (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-midnight-surface border border-midnight-border flex items-center justify-center font-mono-code font-bold text-accent-blue">
                MN
              </div>
              <div>
                <span className="text-base font-bold text-tech-light block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono-code text-accent-cyan">
                  {personalInfo.primaryTitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-tech-slate max-w-md leading-relaxed">
              {personalInfo.positioning}
            </p>

            <div className="text-xs font-mono-code text-tech-slate flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Based in {personalInfo.location} &bull; Open for Remote & Contract</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-accent-blue transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Connect (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-accent-cyan">
              Connect
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-midnight-surface border border-midnight-border flex items-center justify-center text-tech-slate hover:text-accent-blue hover:border-accent-blue transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-midnight-surface border border-midnight-border flex items-center justify-center text-tech-slate hover:text-tech-light hover:border-tech-light transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-midnight-surface border border-midnight-border flex items-center justify-center text-tech-slate hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-midnight-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All engineering rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-tech-slate hidden sm:inline">
              React &bull; TypeScript &bull; Tailwind &bull; Framer Motion
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-midnight-surface border border-midnight-border hover:text-accent-cyan hover:border-accent-cyan transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
