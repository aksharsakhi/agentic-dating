'use client';

import React from 'react';
import { Person } from '../types';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  Heart, 
  Briefcase, 
  Compass, 
  ShieldAlert, 
  Bot, 
  CheckCircle2, 
  HelpCircle,
  Tag
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

interface ProfileModalProps {
  person: Person | null;
  onClose: () => void;
  onStartDate: (person: Person) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  person,
  onClose,
  onStartDate
}) => {
  if (!person) return null;

  const analysis = person.profile_analysis;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 bg-gradient-to-r from-zinc-900 via-[#151824] to-zinc-900 border-b border-white/10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-pink-500/30 shadow-lg"
              />
              <span className="absolute -bottom-1.5 -right-1.5 p-1 rounded-lg bg-pink-500 text-white shadow">
                <Bot className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">{person.name}</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Verified Real Person
                </span>
              </div>
              <p className="text-sm text-pink-400 font-medium mt-0.5">{analysis.identity.profession}</p>
              <p className="text-xs text-gray-400 mt-1">{analysis.identity.location}</p>

              {/* Official Verified Links */}
              <div className="flex items-center gap-2 mt-3">
                <a
                  href={person.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-600/15 text-blue-400 border border-blue-500/30 hover:bg-blue-600/25 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={person.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-pink-500/15 to-purple-500/15 text-pink-300 border border-pink-500/30 hover:bg-pink-500/25 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Public Instagram</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Identity & Background */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span>Professional Life & Identity</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">Source: LinkedIn</span>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">{analysis.identity.background}</p>
          </div>

          {/* AI Analysis: Observed vs Inferred Matrix */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>AI Profile Analysis: Observed vs. Inferred</span>
              </h3>
              <span className="text-xs text-gray-400">Strict Source Attribution</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Observed Facts */}
              <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Observed Facts
                  </span>
                </div>
                <div className="space-y-2.5">
                  {analysis.observed_facts.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                      <p className="text-gray-200">{item.fact}</p>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          item.source === 'LinkedIn' 
                            ? 'bg-blue-500/15 text-blue-300 border border-blue-500/20'
                            : 'bg-pink-500/15 text-pink-300 border border-pink-500/20'
                        }`}>
                          Source: {item.source}
                        </span>
                        <span className="text-[10px] text-gray-500 capitalize">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inferred Traits */}
              <div className="p-4 rounded-xl bg-purple-500/[0.03] border border-purple-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    AI Inferred Traits
                  </span>
                </div>
                <div className="space-y-2.5">
                  {analysis.inferred_traits.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                      <p className="font-semibold text-purple-200">{item.trait}</p>
                      <p className="text-gray-400 mt-0.5 text-[11px] leading-relaxed">Rationale: {item.rationale}</p>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          item.source === 'LinkedIn' 
                            ? 'bg-blue-500/15 text-blue-300 border border-blue-500/20'
                            : 'bg-pink-500/15 text-pink-300 border border-pink-500/20'
                        }`}>
                          Derived from: {item.source}
                        </span>
                        <span className="text-[10px] text-purple-400/80 font-medium">
                          Confidence: {item.confidence}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Interests */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-pink-400" />
                <span>Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {analysis.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10"
                  >
                    <span>{interest.name}</span>
                    <span className={`text-[9px] px-1 rounded font-semibold ${
                      interest.source === 'LinkedIn' ? 'text-blue-400 bg-blue-500/10' : 'text-pink-400 bg-pink-500/10'
                    }`}>
                      {interest.source}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hobbies & Downtime</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {analysis.hobbies.map((hobby, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10"
                  >
                    <span>{hobby.name}</span>
                    <span className={`text-[9px] px-1 rounded font-semibold ${
                      hobby.source === 'LinkedIn' ? 'text-blue-400 bg-blue-500/10' : 'text-pink-400 bg-pink-500/10'
                    }`}>
                      {hobby.source}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Needs & Dating Preferences */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>Relationship Needs & Dating Preferences</span>
            </h4>
            <div className="space-y-2">
              {analysis.needs.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-gray-300">{item.need}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-pink-400 font-semibold px-2 py-0.5 rounded bg-pink-500/10">
                      {item.importance} Importance
                    </span>
                    <span className="text-[10px] text-gray-500">Source: {item.source}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5">
              <p className="text-xs text-gray-400 mb-2">Communication Style:</p>
              <p className="text-xs font-medium text-gray-200 italic">{analysis.communication_style}</p>
            </div>
          </div>

          {/* Deal-Breakers */}
          {analysis.deal_breakers.length > 0 && (
            <div className="p-3.5 rounded-xl bg-rose-500/[0.04] border border-rose-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                <span>Supported Deal-Breakers</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {analysis.deal_breakers.map((db, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    ✕ {db}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Autonomous Agent Configuration */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/20 to-pink-950/20 border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Agent Persona & System Instructions
                </span>
              </div>
              <span className="text-[10px] text-gray-400">Tone: {person.agent_config.tone}</span>
            </div>
            <p className="text-xs text-gray-300 font-mono bg-black/50 p-3 rounded-lg border border-white/5 leading-relaxed">
              "{person.agent_config.system_prompt}"
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-950 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            Represented by autonomous agent in dating simulations
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onStartDate(person)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg shadow-pink-500/25 active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Date This Person's Agent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
