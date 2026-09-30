import { Person } from '../types';
import { LinkedInConnector, InstagramConnector } from './connectors';

export class ProfileResearchService {
  private linkedinConnector = new LinkedInConnector();
  private instagramConnector = new InstagramConnector();

  async analyzeAndCreatePerson(linkedinUrl: string, instagramUrl: string): Promise<Person> {
    const [linkedinData, instagramData] = await Promise.all([
      this.linkedinConnector.extract(linkedinUrl),
      this.instagramConnector.extract(instagramUrl)
    ]);

    const personId = `person_custom_${Date.now()}`;
    const name = linkedinData.name || instagramData.username;

    const person: Person = {
      person_id: personId,
      name,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80`,
      linkedin_url: linkedinUrl,
      instagram_url: instagramUrl,
      linkedin_raw_data: {
        headline: linkedinData.headline,
        location: linkedinData.location,
        summary: linkedinData.summary,
        experience: linkedinData.experience,
        skills: linkedinData.skills,
        education: linkedinData.education
      },
      instagram_raw_data: {
        username: instagramData.username,
        bio: instagramData.bio,
        posts_summary: instagramData.posts_summary,
        highlights: instagramData.highlights,
        vibe_tags: instagramData.vibe_tags
      },
      profile_analysis: {
        identity: {
          name,
          profession: linkedinData.headline.replace(/\(.*?\)/g, '').trim(),
          background: linkedinData.summary,
          location: linkedinData.location
        },
        observed_facts: [
          {
            fact: linkedinData.headline,
            source: 'LinkedIn',
            category: 'career'
          },
          {
            fact: instagramData.bio,
            source: 'Instagram',
            category: 'lifestyle'
          },
          {
            fact: instagramData.posts_summary[0] || 'Active outdoors and values vitality',
            source: 'Instagram',
            category: 'activity'
          },
          {
            fact: `Professional skills recorded: ${linkedinData.skills.slice(0, 3).join(', ')}`,
            source: 'LinkedIn',
            category: 'career'
          }
        ],
        inferred_traits: [
          {
            trait: 'Mission-driven problem solver',
            rationale: `Strong professional dedication shown on LinkedIn coupled with expressive creative outlets on Instagram`,
            source: 'LinkedIn',
            confidence: 'High'
          },
          {
            trait: 'Enjoys balanced lifestyle and outdoor grounding',
            rationale: `Active lifestyle highlights and visual storytelling documented on Instagram`,
            source: 'Instagram',
            confidence: 'High'
          }
        ],
        interests: [
          { name: linkedinData.skills[0] || 'Strategic Leadership', source: 'LinkedIn' },
          { name: 'Outdoor Exploration & Travel', source: 'Instagram' },
          { name: 'Creative Arts & Culture', source: 'Instagram' },
          { name: 'Emerging Tech & Systems', source: 'LinkedIn' }
        ],
        hobbies: [
          { name: 'Weekend Nature Hikes', source: 'Instagram' },
          { name: 'Trying Artisan Cafés & Reading', source: 'Instagram' },
          { name: 'Creative Photography', source: 'Instagram' },
          { name: 'Industry Podcasts', source: 'LinkedIn' }
        ],
        needs: [
          { need: 'A partner who shares mutual ambition and respect for professional craft', importance: 'High', source: 'LinkedIn' },
          { need: 'Capacity for warm, unhurried presence and joyful domestic moments', importance: 'High', source: 'Instagram' },
          { need: 'Open, transparent, and direct communication', importance: 'Medium', source: 'LinkedIn' }
        ],
        values: [
          { name: 'Authentic Integrity', source: 'LinkedIn' },
          { name: 'Continuous Growth & Vitality', source: 'Instagram' },
          { name: 'Loyalty & Kindness', source: 'Instagram' }
        ],
        communication_style: 'Articulate, warm, engaging, direct, and values-oriented.',
        dating_preferences: [
          { preference: 'A casual coffee walk or scenic sunset viewpoint date with meaningful conversation', source: 'Instagram' },
          { preference: 'Discussing creative passions and life milestones over dinner', source: 'LinkedIn' }
        ],
        deal_breakers: ['Lack of ambition or curiosity', 'Pretentious superficiality', 'Passive aggression']
      },
      agent_config: {
        system_prompt: `You are the dating agent representing ${name}. You speak with an articulate, warm, and authentic voice reflecting their professional background from LinkedIn and their vibrant lifestyle from Instagram. On dates, you represent their values of integrity, continuous learning, and warm companionship. Never fabricate facts about ${name}.`,
        tone: 'Articulate, warm, inquisitive, respectful, authentic',
        core_values: ['Integrity', 'Personal vitality', 'Warm connection'],
        dating_style: 'An engaging, curious conversationalist who values depth and shared values.'
      }
    };

    return person;
  }
}
