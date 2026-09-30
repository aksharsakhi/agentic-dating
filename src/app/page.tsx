'use client';

import React, { useState, useEffect } from 'react';
import { Person } from '@/types';
import { SEED_PEOPLE } from '@/data/seedPeople';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProfileGrid } from '@/components/ProfileGrid';
import { ProfileModal } from '@/components/ProfileModal';
import { DatingTheaterModal } from '@/components/DatingTheaterModal';
import { RankingsView } from '@/components/RankingsView';
import { AddPersonModal } from '@/components/AddPersonModal';
import { DemoProgressModal } from '@/components/DemoProgressModal';
import { Sparkles, Heart, Bot, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Home() {
  const [people, setPeople] = useState<Person[]>(SEED_PEOPLE);
  const [activeTab, setActiveTab] = useState<'profiles' | 'dating' | 'rankings'>('profiles');
  
  // Modals state
  const [selectedProfile, setSelectedProfile] = useState<Person | null>(null);
  const [datingPair, setDatingPair] = useState<{ personA: Person; personB: Person } | null>(null);
  const [isDatingModalOpen, setIsDatingModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDemoSimulating, setIsDemoSimulating] = useState(false);

  // Fetch updated list from API if available
  useEffect(() => {
    fetch('/api/people')
      .then(res => res.json())
      .then(data => {
        if (data.people && data.people.length > 0) {
          setPeople(data.people);
        }
      })
      .catch(() => {});
  }, []);

  const handleStartDate = (person: Person) => {
    // Pick another partner
    const other = people.find(p => p.person_id !== person.person_id) || people[1];
    setDatingPair({ personA: person, personB: other });
    setIsDatingModalOpen(true);
  };

  const handleOpenSpecificDate = (personA: Person, personB: Person) => {
    setDatingPair({ personA, personB });
    setIsDatingModalOpen(true);
  };

  const handlePersonAdded = (newPerson: Person) => {
    setPeople(prev => [newPerson, ...prev]);
    setIsAddModalOpen(false);
    setSelectedProfile(newPerson);
  };

  const handleRunDemo = () => {
    setIsDemoSimulating(true);
  };

  const handleDemoFinished = () => {
    setIsDemoSimulating(false);
    // Open Dating Theater with prominent pair
    setDatingPair({ personA: people[0], personB: people[3] });
    setIsDatingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-gray-100">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        peopleCount={people.length}
      />

      {/* Hero Banner */}
      <HeroSection
        onRunDemo={handleRunDemo}
        onExploreProfiles={() => setActiveTab('profiles')}
        onAddPerson={() => setIsAddModalOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'profiles' && (
          <ProfileGrid
            people={people}
            onSelectPerson={(p) => setSelectedProfile(p)}
            onStartDate={handleStartDate}
          />
        )}

        {activeTab === 'dating' && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                Interactive Multi-Agent Theater
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Watch Autonomous Agents Date
              </h2>
              <p className="text-sm text-gray-400 max-w-xl mx-auto mt-1">
                Select any pair from the 25 verified individuals. The agents read both profiles, hold a multi-turn date, and calculate compatibility.
              </p>
              <button
                onClick={() => {
                  setDatingPair({ personA: people[0], personB: people[1] });
                  setIsDatingModalOpen(true);
                }}
                className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-500/25 active:scale-95 transition-all"
              >
                Launch Dating Theater
              </button>
            </div>

            {/* Showcase Quick Pairing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { a: people[0], b: people[3], label: 'Athletic Tech Founder × Creative Inventor' },
                { a: people[2], b: people[7], label: 'Design Aesthete × Global Cultural Icon' },
                { a: people[4], b: people[8], label: 'Gentle Introvert Coder × Mindful Neuroscience Expert' },
                { a: people[5], b: people[13], label: 'Minimalist Painter × Gadget Creator' },
                { a: people[6], b: people[10], label: 'Philosopher Strategist × Civic Changemaker' },
                { a: people[14], b: people[21], label: 'Stoic Craftsman Polymath × Clean Living Matriarch' }
              ].map((pair, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenSpecificDate(pair.a, pair.b)}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 hover:border-pink-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">
                      Featured Date #{idx + 1}
                    </span>
                    <span className="text-[10px] text-gray-500">{pair.label}</span>
                  </div>

                  <div className="flex items-center justify-center gap-3 py-2">
                    <div className="text-center">
                      <img
                        src={pair.a.avatar}
                        alt={pair.a.name}
                        className="w-14 h-14 rounded-xl object-cover border border-blue-500/30 mx-auto"
                      />
                      <span className="text-xs font-bold text-white block mt-1">{pair.a.name.split(' ')[0]}</span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <Heart className="w-4 h-4 fill-pink-500/30 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="text-center">
                      <img
                        src={pair.b.avatar}
                        alt={pair.b.name}
                        className="w-14 h-14 rounded-xl object-cover border border-purple-500/30 mx-auto"
                      />
                      <span className="text-xs font-bold text-white block mt-1">{pair.b.name.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 group-hover:text-pink-300 transition-colors">
                    <span>Watch date dialogue</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rankings' && (
          <RankingsView
            people={people}
            onOpenDate={handleOpenSpecificDate}
            onViewProfile={(p) => setSelectedProfile(p)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950/80 py-8 px-4 sm:px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-pink-400" />
            <span className="font-semibold text-white">Agentic Dating</span>
            <span>· Multi-Agent Autonomous Matchmaking Engine</span>
          </div>

          <div className="flex items-center gap-6">
            <span>25 Real People Verified</span>
            <span>Two Sources: LinkedIn + Instagram</span>
            <span>Transparent 5-Factor Scoring</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProfile && (
        <ProfileModal
          person={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onStartDate={(p) => {
            setSelectedProfile(null);
            handleStartDate(p);
          }}
        />
      )}

      {isDatingModalOpen && (
        <DatingTheaterModal
          initialPersonA={datingPair?.personA}
          initialPersonB={datingPair?.personB}
          people={people}
          onClose={() => setIsDatingModalOpen(false)}
          onViewProfile={(p) => {
            setIsDatingModalOpen(false);
            setSelectedProfile(p);
          }}
        />
      )}

      {isAddModalOpen && (
        <AddPersonModal
          onClose={() => setIsAddModalOpen(false)}
          onPersonAdded={handlePersonAdded}
        />
      )}

      {isDemoSimulating && (
        <DemoProgressModal
          onComplete={handleDemoFinished}
          onClose={() => setIsDemoSimulating(false)}
        />
      )}
    </div>
  );
}
