'use client';

import React, { useState } from 'react';
import { Person } from '../types';
import { 
  ExternalLink, 
  Sparkles, 
  Heart, 
  Search, 
  Bot, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

interface ProfileGridProps {
  people: Person[];
  onSelectPerson: (person: Person) => void;
  onStartDate: (person: Person) => void;
}

export const ProfileGrid: React.FC<ProfileGridProps> = ({
  people,
  onSelectPerson,
  onStartDate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSource, setFilterSource] = useState<'all' | 'tech' | 'creators' | 'wellness'>('all');

  const filteredPeople = people.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.profile_analysis.identity.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.profile_analysis.interests.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterSource === 'all') return true;
    const prof = p.profile_analysis.identity.profession.toLowerCase();
    const interests = p.profile_analysis.interests.map(i => i.name.toLowerCase()).join(' ');

    if (filterSource === 'tech') {
      return prof.includes('ceo') || prof.includes('tech') || prof.includes('founder') || prof.includes('ai') || interests.includes('software');
    }
    if (filterSource === 'creators') {
      return prof.includes('creator') || prof.includes('author') || prof.includes('host') || prof.includes('speaker');
    }
    if (filterSource === 'wellness') {
      return interests.includes('tea') || interests.includes('yoga') || interests.includes('sports') || interests.includes('hiking') || interests.includes('well-being');
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">25 Verified Individuals</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 font-semibold">
              Real LinkedIn + Public Instagram
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Click any profile to inspect the AI’s observed vs. inferred analysis and agent persona.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, skill, interest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="flex items-center bg-zinc-900 border border-white/10 rounded-xl p-1 text-xs">
            <button
              onClick={() => setFilterSource('all')}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                filterSource === 'all' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              All (25)
            </button>
            <button
              onClick={() => setFilterSource('tech')}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                filterSource === 'tech' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Tech & Founders
            </button>
            <button
              onClick={() => setFilterSource('creators')}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                filterSource === 'creators' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Creators & Authors
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person) => {
          const analysis = person.profile_analysis;

          return (
            <div
              key={person.person_id}
              className="group relative rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-pink-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Avatar & Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-14 h-14 rounded-2xl object-cover border border-white/15 group-hover:border-pink-500/50 transition-colors"
                      />
                      <span className="absolute -bottom-1 -right-1 p-0.5 rounded-md bg-zinc-950 border border-pink-500/40 text-pink-400">
                        <Bot className="w-3 h-3" />
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-white group-hover:text-pink-300 transition-colors">
                        {person.name}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-1">{analysis.identity.profession}</p>
                      <p className="text-[11px] text-gray-500">{analysis.identity.location}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    2 Sources
                  </span>
                </div>

                {/* Verified Links */}
                <div className="flex items-center gap-2 mb-3.5">
                  <a
                    href={person.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/20 transition-colors"
                  >
                    <LinkedinIcon className="w-3 h-3" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>

                  <a
                    href={person.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[11px] font-semibold text-pink-400 hover:text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 px-2 py-0.5 rounded border border-pink-500/20 transition-colors"
                  >
                    <InstagramIcon className="w-3 h-3" />
                    <span>Instagram</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Observed Highlight Pill */}
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300 mb-3 line-clamp-2 leading-relaxed">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Observed Signal:</span>
                  "{analysis.observed_facts[1]?.fact || analysis.observed_facts[0]?.fact}"
                </div>

                {/* Interests & Values Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {analysis.interests.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectPerson(person)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Inspect Analysis</span>
                </button>

                <button
                  onClick={() => onStartDate(person)}
                  className="p-2 rounded-xl bg-pink-500/15 hover:bg-pink-500 text-pink-300 hover:text-white border border-pink-500/30 transition-all active:scale-95"
                  title="Date this agent"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
