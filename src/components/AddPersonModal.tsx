'use client';

import React, { useState } from 'react';
import { Person } from '../types';
import { 
  X, 
  Sparkles, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

interface AddPersonModalProps {
  onClose: () => void;
  onPersonAdded: (newPerson: Person) => void;
}

export const AddPersonModal: React.FC<AddPersonModalProps> = ({
  onClose,
  onPersonAdded
}) => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [stepStatus, setStepStatus] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!linkedinUrl.includes('linkedin.com/in/')) {
      setErrorMessage('Please provide a valid public LinkedIn profile URL (e.g., https://www.linkedin.com/in/username).');
      return;
    }

    if (!instagramUrl.includes('instagram.com/')) {
      setErrorMessage('Please provide a valid public Instagram profile URL (e.g., https://www.instagram.com/username).');
      return;
    }

    try {
      setIsLoading(true);
      setStepStatus('Validating public URLs...');
      await new Promise(r => setTimeout(r, 600));

      setStepStatus('Extracting public LinkedIn credentials and skills...');
      await new Promise(r => setTimeout(r, 800));

      setStepStatus('Extracting public Instagram bio, lifestyle signals & vibe...');
      await new Promise(r => setTimeout(r, 900));

      setStepStatus('Running AI Profile Analysis (Observed vs. Inferred)...');
      
      const res = await fetch('/api/person/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkedin_url: linkedinUrl,
          instagram_url: instagramUrl
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to analyze and create agent.');
      }

      setStepStatus('Agent successfully synthesized! Launching profile...');
      await new Promise(r => setTimeout(r, 600));

      onPersonAdded(data.person);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Unable to retrieve public profile data from this URL.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseSampleLinks = () => {
    setLinkedinUrl('https://www.linkedin.com/in/reidhoffman');
    setInstagramUrl('https://www.instagram.com/reidhoffman');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0e1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-zinc-950 via-[#141624] to-zinc-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Create New Dating Agent</h3>
              <p className="text-xs text-gray-400">Analyze real person from their two official links</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/15 text-xs text-gray-300 leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>
              <strong>Rule:</strong> Only official public LinkedIn and public Instagram URLs are used. No external search or unverified sources.
            </span>
          </div>

          {/* LinkedIn Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>Public LinkedIn URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.linkedin.com/in/username"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              className="w-full text-xs sm:text-sm bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Instagram Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Public Instagram URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.instagram.com/username"
              value={instagramUrl}
              onChange={(e) => setInstagramUrl(e.target.value)}
              className="w-full text-xs sm:text-sm bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Quick Sample Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleUseSampleLinks}
              className="text-[11px] text-pink-400 hover:text-pink-300 hover:underline"
            >
              Fill Sample Public Links
            </button>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Loading status */}
          {isLoading && (
            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs flex items-center gap-2.5 animate-pulse">
              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              <span className="font-medium">{stepStatus}</span>
            </div>
          )}

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg shadow-pink-500/25 active:scale-95 disabled:opacity-50 transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Agent...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Create Agent & Analyze Profile</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
