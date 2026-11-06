import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Eye,
  BrainCircuit,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
  Camera,
  Play,
  RotateCcw,
} from 'lucide-react';

type SimulationState = 'normal' | 'gaze_away' | 'multi_face' | 'phone_detected';

export const Innovation: React.FC = () => {
  const [simState, setSimState] = useState<SimulationState>('normal');

  const aiPillars = [
    {
      title: 'Computer Vision & Object Tracking',
      description:
        'Real-time frame ingestion, facial landmark alignment, eye-gaze tracking, and bounding-box object classification via YOLOv8 and OpenCV.',
      icon: Eye,
      tag: 'Perception',
    },
    {
      title: 'Deep Learning & Neural Architectures',
      description:
        'Designing, training, and fine-tuning convolutional networks (CNNs) in PyTorch and TensorFlow for high-accuracy behavioral inference.',
      icon: BrainCircuit,
      tag: 'Neural Nets',
    },
    {
      title: 'Python-Based AI Microservices',
      description:
        'High-concurrency streaming APIs using Python, WebSockets, and asynchronous workers delivering sub-20ms inference latency.',
      icon: Cpu,
      tag: 'Backend AI',
    },
    {
      title: 'Intelligent Enterprise Automation',
      description:
        'Bridging trained ML models with production React web apps, automated notification triggers, and operational audit databases.',
      icon: Zap,
      tag: 'Integration',
    },
  ];

  const getSimData = () => {
    switch (simState) {
      case 'gaze_away':
        return {
          status: 'WARNING // GAZE ANOMALY',
          color: 'text-amber-400',
          borderColor: 'border-amber-500/50',
          bgGlow: 'bg-amber-500/10',
          riskScore: '42%',
          gazeYaw: '+28.4° (Out of Screen)',
          subjects: '1 Face Verified',
          objects: 'None Detected',
          alert: 'Student gaze deviates from exam window for > 3.5s',
          boundingColor: 'border-amber-400',
        };
      case 'multi_face':
        return {
          status: 'CRITICAL // MULTIPLE FACES',
          color: 'text-rose-400',
          borderColor: 'border-rose-500/50',
          bgGlow: 'bg-rose-500/10',
          riskScore: '88%',
          gazeYaw: 'Centered (0.8°)',
          subjects: '2 Faces Detected (Unauthorized)',
          objects: 'None Detected',
          alert: 'Secondary unauthorized person detected in frame',
          boundingColor: 'border-rose-500',
        };
      case 'phone_detected':
        return {
          status: 'CRITICAL // PROHIBITED ITEM',
          color: 'text-rose-400',
          borderColor: 'border-rose-500/50',
          bgGlow: 'bg-rose-500/10',
          riskScore: '96%',
          gazeYaw: 'Downwards (-31.2°)',
          subjects: '1 Face Verified',
          objects: 'Cell Phone (Confidence: 0.94)',
          alert: 'YOLOv8 flagged prohibited electronic device in lower frame',
          boundingColor: 'border-rose-500',
        };
      case 'normal':
      default:
        return {
          status: 'NORMAL // COMPLIANT SESSION',
          color: 'text-emerald-400',
          borderColor: 'border-emerald-500/40',
          bgGlow: 'bg-emerald-500/10',
          riskScore: '2%',
          gazeYaw: 'Focused (1.4°, -0.6°)',
          subjects: '1 Subject (Authenticated)',
          objects: 'No Prohibited Items',
          alert: 'Session parameters within standard academic tolerance',
          boundingColor: 'border-emerald-400',
        };
    }
  };

  const sim = getSimData();

  return (
    <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan uppercase tracking-widest">
            <span className="text-accent-blue font-bold">04.</span>
            <span>Applied Intelligence & Machine Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tech-light tracking-tight">
            AI & Innovation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-1" />
          <p className="text-tech-slate max-w-2xl mt-2 text-sm sm:text-base">
            Bridging software engineering with applied machine learning. Building practical computer vision models, neural networks, and Python-powered inference pipelines that solve mission-critical problems.
          </p>
        </div>

        {/* Top 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-midnight-card border border-midnight-border hover:border-accent-blue/50 transition-all hover:-translate-y-1 group shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-midnight-surface text-accent-cyan border border-midnight-border/60">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-tech-light group-hover:text-accent-cyan transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-tech-slate leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-midnight-border/50 text-[11px] font-mono-code text-accent-blue flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Production Pipeline</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Vision Inference Simulator Showcase */}
        <div className="rounded-3xl bg-midnight-card border border-midnight-border overflow-hidden shadow-2xl">
          {/* Showcase Header */}
          <div className="p-6 sm:p-8 border-b border-midnight-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-midnight-surface/60">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono-code text-accent-cyan">
                <Camera className="w-4 h-4 text-accent-blue" />
                <span>INTERACTIVE COMPUTER VISION LAB</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-tech-light">
                ExamGuard AI Proctoring Architecture Simulator
              </h3>
              <p className="text-xs sm:text-sm text-tech-slate">
                Experience how real-time behavioral heuristics and YOLOv8 object detection work under simulated exam scenarios.
              </p>
            </div>

            {/* State Switcher Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSimState('normal')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-medium transition-all ${
                  simState === 'normal'
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-midnight-surface text-tech-slate border border-midnight-border hover:text-tech-light'
                }`}
              >
                Normal Focus
              </button>
              <button
                onClick={() => setSimState('gaze_away')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-medium transition-all ${
                  simState === 'gaze_away'
                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'bg-midnight-surface text-tech-slate border border-midnight-border hover:text-tech-light'
                }`}
              >
                Gaze Deviation
              </button>
              <button
                onClick={() => setSimState('multi_face')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-medium transition-all ${
                  simState === 'multi_face'
                    ? 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'bg-midnight-surface text-tech-slate border border-midnight-border hover:text-tech-light'
                }`}
              >
                Multi-Face
              </button>
              <button
                onClick={() => setSimState('phone_detected')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-medium transition-all ${
                  simState === 'phone_detected'
                    ? 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'bg-midnight-surface text-tech-slate border border-midnight-border hover:text-tech-light'
                }`}
              >
                Prohibited Device
              </button>
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Stream Mockup (7 cols) */}
            <div className="lg:col-span-7 relative rounded-2xl bg-slate-950 border border-midnight-border overflow-hidden min-h-[300px] sm:min-h-[340px] flex items-center justify-center p-6">
              {/* Simulated Camera Viewfinder Grid */}
              <div className="absolute inset-0 tech-grid-bg opacity-30" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono-code text-tech-slate">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>REC // CAM-01 (WEBRTC STREAM)</span>
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono-code text-accent-cyan">
                YOLOv8s-pose @ 60 FPS
              </div>

              {/* Simulated Subject Bounding Box */}
              <div
                className={`relative w-48 sm:w-56 h-56 sm:h-64 rounded-2xl border-2 ${sim.boundingColor} border-dashed p-4 flex flex-col items-center justify-between transition-colors duration-300`}
              >
                {/* Bounding Box Corner Reticles */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-white" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-white" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-white" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-white" />

                {/* Bounding Label */}
                <div className="text-[10px] font-mono-code bg-black/80 px-2 py-0.5 rounded text-white border border-white/20">
                  ID: CANDIDATE-048 (0.98)
                </div>

                {/* Wireframe Facial Landmark Center */}
                <div className="relative w-24 h-24 rounded-full border border-accent-cyan/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-accent-blue/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                  </div>
                  {/* Gaze vector pointer */}
                  {simState === 'gaze_away' && (
                    <div className="absolute w-12 h-0.5 bg-amber-400 rotate-[40deg] -right-4" />
                  )}
                  {simState === 'phone_detected' && (
                    <div className="absolute w-12 h-0.5 bg-rose-400 rotate-[90deg] -bottom-4" />
                  )}
                </div>

                {/* Detected Object Callout if any */}
                {simState === 'phone_detected' ? (
                  <div className="text-[10px] font-mono-code bg-rose-950/90 text-rose-300 px-2 py-0.5 rounded border border-rose-700 animate-pulse">
                    ⚠ CELL_PHONE (0.94)
                  </div>
                ) : simState === 'multi_face' ? (
                  <div className="text-[10px] font-mono-code bg-rose-950/90 text-rose-300 px-2 py-0.5 rounded border border-rose-700 animate-pulse">
                    ⚠ SECOND_PERSON (0.87)
                  </div>
                ) : (
                  <div className="text-[10px] font-mono-code text-emerald-400">
                    FACIAL LANDMARKS OK
                  </div>
                )}
              </div>

              {/* Status Banner at bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono-code bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className={sim.color}>{sim.status}</span>
                <span className="text-tech-slate">Inference: 14.8ms</span>
              </div>
            </div>

            {/* Telemetry Dashboard Data (5 cols) */}
            <div className="lg:col-span-5 space-y-4 font-mono-code text-xs">
              <div className="p-4 rounded-xl bg-midnight-surface/80 border border-midnight-border space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-midnight-border/60">
                  <span className="text-tech-slate">Proctoring Risk Index:</span>
                  <span className={`text-base font-bold ${sim.color}`}>{sim.riskScore}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-tech-slate">Gaze Deviation:</span>
                    <span className="text-tech-light">{sim.gazeYaw}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-slate">Subject Verification:</span>
                    <span className="text-tech-light">{sim.subjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-slate">Objects Detected:</span>
                    <span className="text-tech-light">{sim.objects}</span>
                  </div>
                </div>
              </div>

              {/* Heuristic Incident Notice */}
              <div className={`p-4 rounded-xl ${sim.bgGlow} border ${sim.borderColor} space-y-1.5`}>
                <div className="flex items-center gap-1.5 font-bold font-sans text-tech-light text-xs">
                  <Activity className="w-4 h-4 text-accent-cyan" />
                  <span>Supervisor Incident Log</span>
                </div>
                <p className="text-xs text-tech-slate font-sans leading-relaxed">
                  {sim.alert}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-midnight-surface border border-midnight-border text-[11px] text-tech-slate space-y-1">
                <div className="text-accent-blue font-semibold">// Pipeline Architecture</div>
                <div>FastAPI WebSocket &bull; YOLOv8s &bull; OpenCV Landmark Extraction &bull; MySQL Audit DB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

