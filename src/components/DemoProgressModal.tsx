'use client';

import React, { useState, useEffect } from 'react';
import { 
  Loader2, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Bot, 
  Users, 
  Trophy, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface DemoProgressModalProps {
  onComplete: () => void;
  onClose: () => void;
}

export const DemoProgressModal: React.FC<DemoProgressModalProps> = ({
  onComplete,
  onClose
}) => {
  const steps = [
    { title: 'Researching Profiles', desc: 'Validating 25 official LinkedIn and public Instagram sources', icon: Users },
    { title: 'Creating Agents', desc: 'Synthesizing individual persona prompts and value hierarchies', icon: Bot },
    { title: 'Starting Dates', desc: 'Pairing agents across complementary domains and interests', icon: Heart },
    { title: 'Agents are Talking', desc: 'Multi-turn back-and-forth dialogue citing verified facts', icon: Sparkles },
    { title: 'Evaluating Compatibility', desc: 'Computing 5-factor transparent alignment scores', icon: ShieldCheck },
    { title: 'Generating Rankings', desc: 'Sorting best-match partner candidates for every individual', icon: Trophy },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1100);

    return () => clearInterval(timer);
  }, [steps.length]);

  const isFinished = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0e1017] border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 mb-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-white">Running 25-Person Dating Simulation</h3>
          <p className="text-xs text-gray-400 mt-1">Autonomous multi-agent discovery & dating harness</p>
        </div>

        {/* Step List */}
        <div className="space-y-3 mb-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isDone = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-3.5 ${
                  isDone
                    ? 'bg-emerald-500/[0.04] border-emerald-500/20 text-gray-300'
                    : isCurrent
                    ? 'bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-500/30 text-white scale-[1.02]'
                    : 'bg-white/[0.01] border-white/5 text-gray-600 opacity-60'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  isDone
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : isCurrent
                    ? 'bg-pink-500/20 text-pink-400 animate-pulse'
                    : 'bg-zinc-800 text-gray-500'
                }`}>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold">{step.title}</h4>
                    {isDone && <span className="text-[10px] text-emerald-400 font-semibold">Done</span>}
                    {isCurrent && <span className="text-[10px] text-pink-400 font-semibold animate-pulse">Running...</span>}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        {isFinished ? (
          <button
            onClick={onComplete}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-xl shadow-pink-500/25 active:scale-95 transition-all"
          >
            <span>View Dating Sessions & Rankings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 py-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-pink-400" />
            <span>Simulating dating agents in background...</span>
          </div>
        )}
      </div>
    </div>
  );
};
