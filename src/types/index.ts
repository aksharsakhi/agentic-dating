export interface ObservedFact {
  fact: string;
  source: 'LinkedIn' | 'Instagram';
  category: 'career' | 'education' | 'lifestyle' | 'activity' | 'social';
}

export interface InferredTrait {
  trait: string;
  rationale: string;
  source: 'LinkedIn' | 'Instagram';
  confidence: 'High' | 'Medium' | 'Tentative';
}

export interface TaggedItem {
  name: string;
  source: 'LinkedIn' | 'Instagram';
}

export interface NeedItem {
  need: string;
  importance: 'High' | 'Medium';
  source: 'LinkedIn' | 'Instagram';
}

export interface DatingPreferenceItem {
  preference: string;
  source: 'LinkedIn' | 'Instagram';
}

export interface ProfileAnalysis {
  identity: {
    name: string;
    profession: string;
    background: string;
    location?: string;
  };
  observed_facts: ObservedFact[];
  inferred_traits: InferredTrait[];
  interests: TaggedItem[];
  hobbies: TaggedItem[];
  needs: NeedItem[];
  values: TaggedItem[];
  communication_style: string;
  dating_preferences: DatingPreferenceItem[];
  deal_breakers: string[];
}

export interface AgentConfig {
  system_prompt: string;
  tone: string;
  core_values: string[];
  dating_style: string;
}

export interface Person {
  person_id: string;
  name: string;
  avatar: string;
  linkedin_url: string;
  instagram_url: string;
  linkedin_raw_data: {
    headline: string;
    location: string;
    summary: string;
    experience: string[];
    skills: string[];
    education: string[];
  };
  instagram_raw_data: {
    username: string;
    bio: string;
    posts_summary: string[];
    highlights: string[];
    vibe_tags: string[];
  };
  profile_analysis: ProfileAnalysis;
  agent_config: AgentConfig;
}

export interface DatingMessage {
  sender: 'agent_a' | 'agent_b';
  sender_name: string;
  message: string;
  cited_source?: 'LinkedIn' | 'Instagram' | 'Both';
  topic?: string;
  timestamp?: string;
}

export interface CompatibilityScore {
  overall_score: number;
  interest_alignment: number;
  lifestyle_alignment: number;
  values_alignment: number;
  communication_compatibility: number;
  dating_conversation_chemistry: number;
  summary: string;
  strengths: string[];
  friction_points: string[];
}

export interface DatingSession {
  id: string;
  agent_a: Person;
  agent_b: Person;
  conversation: DatingMessage[];
  compatibility: CompatibilityScore;
  timestamp: string;
}

export interface MatchRankingItem {
  partner: Person;
  score: number;
  session_id: string;
  chemistry_verdict: string;
  top_shared_values: string[];
}

export interface PersonRanking {
  target_person: Person;
  rankings: MatchRankingItem[];
}
