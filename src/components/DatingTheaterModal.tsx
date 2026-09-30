'use client';

import React, { useState, useEffect } from 'react';
import { Person, DatingSession } from '../types';
import { createDatingSession } from '../lib/datingEngine';
import { 
  X, 
  Heart, 
  Sparkles, 
  MessageSquare, 
  Award, 
  CheckCircle, 
  AlertCircle, 
  Bot, 
  RefreshCw,
  Zap,
  ArrowRight
} from 'lucide-react';

interface DatingTheaterModalProps {
  initialPersonA?: Person;
  initialPersonB?: Person;
  people: Person[];
  onClose: () => void;
  onViewProfile: (person: Person) => void;
}

export const DatingTheaterModal: React.FC<DatingTheaterModalProps> = ({
  initialPersonA,
  initialPersonB,
  people,
  onClose,
  onViewProfile
}) => {
  const [selectedIdA, setSelectedIdA] = useState<string>(
    initialPersonA?.person_id || people[0]?.person_id || ''
  );
  const [selectedIdB, setSelectedIdB] = useState<string>(
    initialPersonB?.person_id || people[1]?.person_id || ''
  );
  const [session, setSession] = useState<DatingSession | null>(null);
  const [activeMessageIndex, setActiveMessageIndex] = useState<number>(6);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const personA = people.find(p => p.person_id === selectedIdA) || people[0];
  const personB = people.find(p => p.person_id === selectedIdB) || people[1];

  // Initialize or re-run date session
  const runDatingSession = (pA: Person, pB: Person) => {
    setIsSimulating(true);
    setActiveMessageIndex(1);

    const newSession = createDatingSession(pA, pB);
    setSession(newSession);

    // Progressive message reveal
    let current = 1;
    const interval = setInterval(() => {
      current++;
      setActiveMessageIndex(current);
      if (current >= newSession.conversation.length) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  useEffect(() => {
    if (personA && personB && personA.person_id !== personB.person_id) {
      const initialDate = createDatingSession(personA, personB);
      setSession(initialDate);
      setActiveMessageIndex(initialDate.conversation.length);
    }
  }, [selectedIdA, selectedIdB]);

  if (!personA || !personB) return null;

  const compat = session?.compatibility;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-[#0e1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-zinc-950 via-[#141622] to-zinc-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">Agent Dating Theater</h2>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/25">
                  Live Agent-to-Agent Date
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Watch two autonomous AI agents date on behalf of real people using only LinkedIn & Instagram facts.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => runDatingSession(personA, personB)}
              disabled={isSimulating}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-pink-300 border border-pink-500/20 active:scale-95 disabled:opacity-50 transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Dating in Progress...' : 'Re-run Live Date'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Agent Pair Selector Stage */}
        <div className="p-4 bg-black/40 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
          {/* Agent A Card */}
          <div className="flex-1 min-w-[240px] flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-blue-500/20">
            <div className="flex items-center gap-3">
              <img
                src={personA.avatar}
                alt={personA.name}
                className="w-12 h-12 rounded-xl object-cover border border-blue-400/40"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300">Agent A</span>
                  <span className="text-sm font-bold text-white">{personA.name}</span>
                </div>
                <p className="text-[11px] text-gray-400 truncate max-w-[170px]">{personA.profile_analysis.identity.profession}</p>
              </div>
            </div>
            <select
              value={selectedIdA}
              onChange={(e) => setSelectedIdA(e.target.value)}
              className="text-xs bg-zinc-900 text-gray-200 border border-white/10 rounded-lg px-2 py-1 outline-none focus:border-blue-500"
            >
              {people.map(p => (
                <option key={p.person_id} value={p.person_id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Heart / Romance Catalyst */}
          <div className="flex flex-col items-center justify-center px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 p-[1px] flex items-center justify-center shadow-lg shadow-pink-500/30">
              <div className="w-full h-full bg-[#0d0e15] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-400 fill-pink-500/30 animate-pulse" />
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-semibold mt-1">Dating</span>
          </div>

          {/* Agent B Card */}
          <div className="flex-1 min-w-[240px] flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-purple-500/20">
            <div className="flex items-center gap-3">
              <img
                src={personB.avatar}
                alt={personB.name}
                className="w-12 h-12 rounded-xl object-cover border border-purple-400/40"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300">Agent B</span>
                  <span className="text-sm font-bold text-white">{personB.name}</span>
                </div>
                <p className="text-[11px] text-gray-400 truncate max-w-[170px]">{personB.profile_analysis.identity.profession}</p>
              </div>
            </div>
            <select
              value={selectedIdB}
              onChange={(e) => setSelectedIdB(e.target.value)}
              className="text-xs bg-zinc-900 text-gray-200 border border-white/10 rounded-lg px-2 py-1 outline-none focus:border-purple-500"
            >
              {people.map(p => (
                <option key={p.person_id} value={p.person_id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Scrollable Dating Stage & Compatibility Evaluation */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Conversation Transcript (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Dating Conversation Transcript
                </span>
              </div>
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Autonomous Multi-Turn Exchange
              </span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 pr-1">
              {session?.conversation.slice(0, activeMessageIndex).map((msg, idx) => {
                const isAgentA = msg.sender === 'agent_a';
                const currentPerson = isAgentA ? personA : personB;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isAgentA ? 'items-start' : 'items-end'} animate-slideUp`}
                  >
                    {/* Header info */}
                    <div className="flex items-center gap-2 mb-1 px-1 text-xs">
                      <span className={`font-semibold ${isAgentA ? 'text-blue-300' : 'text-purple-300'}`}>
                        {currentPerson.name}’s Agent
                      </span>
                      {msg.cited_source && (
                        <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full ${
                          msg.cited_source === 'Instagram'
                            ? 'bg-pink-500/15 text-pink-300 border border-pink-500/20'
                            : msg.cited_source === 'LinkedIn'
                            ? 'bg-blue-500/15 text-blue-300 border border-blue-500/20'
                            : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'
                        }`}>
                          Cites: {msg.cited_source}
                        </span>
                      )}
                    </div>

                    {/* Speech Bubble */}
                    <div className={`max-w-[90%] sm:max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed border shadow-md ${
                      isAgentA
                        ? 'bg-[#151928] text-gray-200 border-blue-500/30 rounded-tl-sm'
                        : 'bg-[#21142b] text-gray-200 border-purple-500/30 rounded-tr-sm'
                    }`}>
                      {msg.message}
                    </div>

                    {/* Topic footnote */}
                    {msg.topic && (
                      <span className="text-[10px] text-gray-500 mt-1 px-1">
                        Phase: {msg.topic}
                      </span>
                    )}
                  </div>
                );
              })}

              {isSimulating && (
                <div className="flex items-center gap-2 text-xs text-pink-400 p-2 italic animate-pulse">
                  <Bot className="w-4 h-4" />
                  <span>Agent is evaluating response and formulating next inquiry...</span>
                </div>
              )}
            </div>
          </div>

          {/* Compatibility Breakdown (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Compatibility Evaluation
                </span>
              </div>
              <span className="text-[11px] text-gray-400">Transparent 5-Factor Model</span>
            </div>

            {compat && (
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
                {/* Overall Score Dial */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-pink-950/30 to-purple-950/30 border border-pink-500/25">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pink-300">
                      Overall Compatibility
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5">Weighted composite rating</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">{compat.overall_score}</span>
                    <span className="text-sm font-semibold text-pink-400">%</span>
                  </div>
                </div>

                {/* 5-Factor Transparent Progress Bars */}
                <div className="space-y-3">
                  {/* Factor 1: Interest (20%) */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">Interest Alignment (20%)</span>
                      <span className="font-semibold text-pink-300">{compat.interest_alignment}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-700" 
                        style={{ width: `${compat.interest_alignment}%` }} 
                      />
                    </div>
                  </div>

                  {/* Factor 2: Lifestyle (25%) */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">Lifestyle & Rhythm (25%)</span>
                      <span className="font-semibold text-purple-300">{compat.lifestyle_alignment}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-700" 
                        style={{ width: `${compat.lifestyle_alignment}%` }} 
                      />
                    </div>
                  </div>

                  {/* Factor 3: Values (25%) */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">Values & Purpose (25%)</span>
                      <span className="font-semibold text-cyan-300">{compat.values_alignment}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-700" 
                        style={{ width: `${compat.values_alignment}%` }} 
                      />
                    </div>
                  </div>

                  {/* Factor 4: Communication (15%) */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">Communication Fit (15%)</span>
                      <span className="font-semibold text-emerald-300">{compat.communication_compatibility}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-700" 
                        style={{ width: `${compat.communication_compatibility}%` }} 
                      />
                    </div>
                  </div>

                  {/* Factor 5: Conversation Chemistry (15%) */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">Conversation Chemistry (15%)</span>
                      <span className="font-semibold text-yellow-300">{compat.dating_conversation_chemistry}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-700" 
                        style={{ width: `${compat.dating_conversation_chemistry}%` }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Qualitative Chemistry Summary */}
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-1">AI Chemistry Verdict:</span>
                  {compat.summary}
                </div>

                {/* Strengths & Potential Friction */}
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                  <div>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1 mb-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Strengths
                    </span>
                    <ul className="list-disc list-inside text-gray-300 text-[11px] space-y-0.5">
                      {compat.strengths.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-amber-400 flex items-center gap-1 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Potential Friction Point
                    </span>
                    <ul className="list-disc list-inside text-gray-300 text-[11px] space-y-0.5">
                      {compat.friction_points.map((f: string, i: number) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons to View Either Profile */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => onViewProfile(personA)}
                    className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs font-semibold text-center transition-colors"
                  >
                    View {personA.name.split(' ')[0]}’s Profile
                  </button>
                  <button
                    onClick={() => onViewProfile(personB)}
                    className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 text-xs font-semibold text-center transition-colors"
                  >
                    View {personB.name.split(' ')[0]}’s Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
