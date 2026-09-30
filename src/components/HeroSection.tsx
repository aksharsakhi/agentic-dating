'use client';

import React from 'react';
import { Play, Sparkles, Plus, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onRunDemo: () => void;
  onExploreProfiles: () => void;
  onAddPerson: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRunDemo,
  onExploreProfiles,
  onAddPerson
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 border-b border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-600/15 via-purple-600/15 to-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-6 backdrop-blur-md">
          <Cpu className="w-3.5 h-3.5 text-pink-400" />
          <span>Autonomous AI Agents · Exactly Two Data Sources</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          Agentic <span className="gradient-text">Dating</span>
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-200 mb-4 tracking-tight">
          Your agent dates for you.
        </p>

        {/* Explanation */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
          Each person is represented by an AI agent that extracts needs, hobbies, and values from their public{' '}
          <span className="text-blue-400 font-semibold">LinkedIn</span> and{' '}
          <span className="text-pink-400 font-semibold">Instagram</span>. The agents go out and date each other, evaluating real conversational chemistry and ranking best fits.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={onRunDemo}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-xl shadow-pink-500/25 active:scale-95 transition-all group"
          >
            <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
            <span>Run Dating Demo</span>
            <Sparkles className="w-4 h-4 text-pink-200" />
          </button>

          <button
            onClick={onExploreProfiles}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/10 backdrop-blur-md active:scale-95 transition-all"
          >
            <span>Explore 25 Real Profiles</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </button>

          <button
            onClick={onAddPerson}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900 hover:bg-zinc-800 text-pink-300 border border-pink-500/20 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 text-pink-400" />
            <span>Add Person Links</span>
          </button>
        </div>

        {/* Architectural Flow Diagram Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-[11px] font-semibold text-blue-400 block mb-1">1. Two Sources</span>
            <p className="text-xs text-gray-300 font-medium">Public LinkedIn + Public Instagram</p>
            <p className="text-[11px] text-gray-500 mt-1">Zero external noise or search bias</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-[11px] font-semibold text-purple-400 block mb-1">2. AI Analysis</span>
            <p className="text-xs text-gray-300 font-medium">Observed vs Inferred Profile</p>
            <p className="text-[11px] text-gray-500 mt-1">Needs, hobbies, lifestyle & values</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-[11px] font-semibold text-pink-400 block mb-1">3. Agent Dating</span>
            <p className="text-xs text-gray-300 font-medium">Multi-Turn Live Dialogue</p>
            <p className="text-[11px] text-gray-500 mt-1">Direct citations of profile facts</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-[11px] font-semibold text-cyan-400 block mb-1">4. Transparent Fit</span>
            <p className="text-xs text-gray-300 font-medium">5-Factor Compatibility</p>
            <p className="text-[11px] text-gray-500 mt-1">Ranked match results for everyone</p>
          </div>
        </div>
      </div>
    </section>
  );
};
