import React from 'react';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Engineering Grid Layer */}
      <div className="absolute inset-0 tech-grid-bg opacity-40 dark:opacity-30 light:opacity-20" />

      {/* Ambient Radial Lighting Cones */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 light:bg-accent-blue/5 blur-[120px]" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-accent-cyan/10 dark:bg-accent-cyan/10 light:bg-accent-cyan/5 blur-[130px]" />
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/10 light:bg-indigo-600/5 blur-[140px]" />

      {/* Subtle Noise / Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-bg/60 dark:to-midnight-bg/80 light:to-slate-100/40" />
    </div>
  );
};

