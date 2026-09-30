'use client';

import React, { useState, useMemo } from 'react';
import { Person, MatchRankingItem } from '../types';
import { computeRankingsForPerson } from '../lib/datingEngine';
import { 
  Trophy, 
  Sparkles, 
  Heart, 
  ArrowRight, 
  Bot, 
  ShieldCheck, 
  Users,
  ChevronRight,
  Zap
} from 'lucide-react';

interface RankingsViewProps {
  people: Person[];
  onOpenDate: (personA: Person, personB: Person) => void;
  onViewProfile: (person: Person) => void;
}

export const RankingsView: React.FC<RankingsViewProps> = ({
  people,
  onOpenDate,
  onViewProfile
}) => {
  const [selectedPersonId, setSelectedPersonId] = useState<string>(people[0]?.person_id || '');

  const targetPerson = people.find(p => p.person_id === selectedPersonId) || people[0];

  const ranking = useMemo(() => {
    if (!targetPerson) return null;
    return computeRankingsForPerson(targetPerson, people);
  }, [targetPerson, people]);

  if (!targetPerson || !ranking) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Compatibility Rankings</h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              Transparent Algorithm
            </span>
          </div>
          <p className="text-sm text-gray-400">
            For every person in the pool, see who fits them best based on multi-factor agent evaluation.
          </p>
        </div>

        {/* Person Selector Dropdown */}
        <div className="flex items-center gap-3 bg-zinc-900/80 border border-white/10 p-2 rounded-xl backdrop-blur-md">
          <img
            src={targetPerson.avatar}
            alt={targetPerson.name}
            className="w-10 h-10 rounded-lg object-cover border border-pink-500/40"
          />
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Ranking Matches For:</span>
            <select
              value={selectedPersonId}
              onChange={(e) => setSelectedPersonId(e.target.value)}
              className="text-xs sm:text-sm font-semibold bg-transparent text-white outline-none cursor-pointer"
            >
              {people.map(p => (
                <option key={p.person_id} value={p.person_id} className="bg-zinc-900 text-white">
                  {p.name} ({p.profile_analysis.identity.profession})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Target Person Focus Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-950/20 via-[#131520] to-purple-950/20 border border-pink-500/20 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={targetPerson.avatar}
            alt={targetPerson.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-pink-500/40 shadow-lg"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">{targetPerson.name}</h3>
              <button
                onClick={() => onViewProfile(targetPerson)}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/15 text-pink-300 transition-colors"
              >
                View Full Profile Analysis →
              </button>
            </div>
            <p className="text-xs text-gray-300 mt-0.5">{targetPerson.profile_analysis.identity.profession}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {targetPerson.profile_analysis.values.map((v, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                  ✦ {v.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-right flex items-center gap-4">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Total Pool Tested</span>
            <span className="text-lg font-bold text-white">{people.length - 1} Candidates</span>
          </div>
        </div>
      </div>

      {/* Ranked Candidates Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>Ranked Candidates (Highest Compatibility First)</span>
        </h3>

        {ranking.rankings.map((item: MatchRankingItem, index: number) => {
          const isTop3 = index < 3;
          const badgeColors = [
            'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
            'bg-zinc-300/20 text-zinc-200 border-zinc-300/30',
            'bg-amber-600/20 text-amber-300 border-amber-600/30'
          ];

          return (
            <div
              key={item.partner.person_id}
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                isTop3 
                  ? 'bg-gradient-to-r from-zinc-900/90 via-[#141624] to-zinc-900/90 border-pink-500/25 shadow-lg shadow-pink-500/5 hover:border-pink-500/50' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/15'
              }`}
            >
              {/* Rank & Person Summary */}
              <div className="flex items-center gap-4">
                {/* Rank Badge */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm border ${
                  isTop3 ? badgeColors[index] : 'bg-white/5 text-gray-400 border-white/10'
                }`}>
                  #{index + 1}
                </div>

                {/* Avatar */}
                <img
                  src={item.partner.avatar}
                  alt={item.partner.name}
                  className="w-12 h-12 rounded-xl object-cover border border-white/10"
                />

                {/* Details */}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-white hover:text-pink-300 cursor-pointer transition-colors"
                      onClick={() => onViewProfile(item.partner)}
                    >
                      {item.partner.name}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {item.chemistry_verdict}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{item.partner.profile_analysis.identity.profession}</p>

                  {item.match_rationale && (
                    <p className="text-[11px] text-pink-300/80 italic mt-1 line-clamp-1">
                      "{item.match_rationale}"
                    </p>
                  )}

                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] text-gray-500">Shared values:</span>
                    {item.top_shared_values.map((val, vi) => (
                      <span key={vi} className="text-[10px] text-pink-300 bg-pink-500/10 px-1.5 py-0.2 rounded font-medium">
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Score & Interactive Actions */}
              <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                {/* Score bar */}
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-0.5">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      {item.score.toFixed(1)}
                    </span>
                    <span className="text-xs font-bold text-pink-400">%</span>
                  </div>
                  <div className="w-28 h-2 rounded-full bg-zinc-800 overflow-hidden mt-1 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-full"
                      style={{ width: `${Math.min(100, item.score)}%` }}
                    />
                  </div>
                </div>

                {/* Launch Dating Session CTA */}
                <button
                  onClick={() => onOpenDate(targetPerson, item.partner)}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white text-gray-200 border border-white/10 active:scale-95 transition-all shadow-md group"
                >
                  <Bot className="w-3.5 h-3.5 text-pink-400 group-hover:text-white" />
                  <span>Inspect Date & Transcript</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
