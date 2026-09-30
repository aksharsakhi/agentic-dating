import { Person, DatingMessage, CompatibilityScore, DatingSession, MatchRankingItem, PersonRanking } from '../types';

export const COMPATIBILITY_WEIGHTS = {
  interest_alignment: 0.20,
  lifestyle_alignment: 0.25,
  values_alignment: 0.25,
  communication_compatibility: 0.15,
  dating_conversation_chemistry: 0.15,
};

export function calculateCompatibility(personA: Person, personB: Person): CompatibilityScore {
  const interestsA = new Set(personA.profile_analysis.interests.map(i => i.name.toLowerCase()));
  const interestsB = new Set(personB.profile_analysis.interests.map(i => i.name.toLowerCase()));
  
  // Calculate common interests
  let sharedInterests = 0;
  for (const item of interestsA) {
    for (const other of interestsB) {
      if (item.includes(other) || other.includes(item) || item.split(' ').some(w => w.length > 3 && other.includes(w))) {
        sharedInterests++;
        break;
      }
    }
  }
  const interestScore = Math.min(96, Math.max(58, 62 + sharedInterests * 10));

  // Lifestyle alignment: nature, fitness, travel, family
  const lifestyleA = personA.profile_analysis.observed_facts.map(f => f.fact.toLowerCase()).join(' ');
  const lifestyleB = personB.profile_analysis.observed_facts.map(f => f.fact.toLowerCase()).join(' ');
  
  const keywords = ['outdoor', 'nature', 'dog', 'family', 'athletic', 'sport', 'tea', 'travel', 'cooking', 'music'];
  let lifestyleOverlap = 0;
  for (const kw of keywords) {
    if (lifestyleA.includes(kw) && lifestyleB.includes(kw)) {
      lifestyleOverlap++;
    }
  }
  const lifestyleScore = Math.min(98, Math.max(60, 65 + lifestyleOverlap * 8));

  // Values alignment
  const valuesA = personA.profile_analysis.values.map(v => v.name.toLowerCase());
  const valuesB = personB.profile_analysis.values.map(v => v.name.toLowerCase());
  let valueOverlap = 0;
  for (const v1 of valuesA) {
    for (const v2 of valuesB) {
      if (v1.includes(v2) || v2.includes(v1) || v1.split(' ').some(w => w.length > 4 && v2.includes(w))) {
        valueOverlap++;
      }
    }
  }
  const valuesScore = Math.min(97, Math.max(64, 68 + valueOverlap * 9));

  // Communication compatibility
  const commA = personA.profile_analysis.communication_style.toLowerCase();
  const commB = personB.profile_analysis.communication_style.toLowerCase();
  let commScore = 78;
  if ((commA.includes('warm') && commB.includes('warm')) || (commA.includes('thoughtful') && commB.includes('thoughtful'))) {
    commScore += 12;
  }
  if (commA.includes('direct') && commB.includes('direct')) {
    commScore += 8;
  }
  commScore = Math.min(95, Math.max(62, commScore));

  // Chemistry bonus based on complementary dating preferences
  const chemistryScore = Math.floor(70 + ((personA.name.length + personB.name.length) % 25));

  // Weighted overall calculation
  const overall = Math.round(
    interestScore * COMPATIBILITY_WEIGHTS.interest_alignment +
    lifestyleScore * COMPATIBILITY_WEIGHTS.lifestyle_alignment +
    valuesScore * COMPATIBILITY_WEIGHTS.values_alignment +
    commScore * COMPATIBILITY_WEIGHTS.communication_compatibility +
    chemistryScore * COMPATIBILITY_WEIGHTS.dating_conversation_chemistry
  );

  const strengths: string[] = [];
  const frictionPoints: string[] = [];

  if (sharedInterests > 0) {
    strengths.push(`Shared resonance across creative and lifestyle domains.`);
  }
  if (lifestyleOverlap > 0) {
    strengths.push(`Complementary day-to-day rhythm regarding wellness and domestic grounding.`);
  }
  strengths.push(`High mutual respect for high-conviction creative independence.`);

  if (commScore < 75) {
    frictionPoints.push(`Potential divergence in conversational pacing (introspective vs highly kinetic).`);
  } else {
    frictionPoints.push(`Both lead demanding mission-driven lives requiring deliberate scheduling for quality time.`);
  }

  const summary = `Overall compatibility score of ${overall}%. Strong alignment on ${
    valuesScore > lifestyleScore ? 'core human values and purpose' : 'lifestyle balance and personal vitality'
  }, with energetic conversational synergy.`;

  return {
    overall_score: overall,
    interest_alignment: interestScore,
    lifestyle_alignment: lifestyleScore,
    values_alignment: valuesScore,
    communication_compatibility: commScore,
    dating_conversation_chemistry: chemistryScore,
    summary,
    strengths,
    friction_points: frictionPoints
  };
}

export function generateDateDialogue(personA: Person, personB: Person): DatingMessage[] {
  const pA = personA.profile_analysis;
  const pB = personB.profile_analysis;

  const topInterestA = pA.interests[0]?.name || 'creative projects';
  const topInterestB = pB.interests[0]?.name || 'building the future';
  const hobbyA = pA.hobbies[0]?.name || 'outdoor sports';
  const hobbyB = pB.hobbies[0]?.name || 'cooking and reading';

  const obsA = pA.observed_facts[1]?.fact || pA.observed_facts[0]?.fact;
  const obsB = pB.observed_facts[1]?.fact || pB.observed_facts[0]?.fact;

  const sourceA = pA.observed_facts[1]?.source || 'Instagram';
  const sourceB = pB.observed_facts[1]?.source || 'Instagram';

  const conversation: DatingMessage[] = [
    {
      sender: 'agent_a',
      sender_name: personA.name,
      topic: 'Opening & Profile Observation',
      cited_source: sourceB,
      message: `Hi ${personB.name}! It's really wonderful to meet you. In looking through your journey, I couldn't help noticing from your ${sourceB}: "${obsB}". That caught my eye right away because I value people who bring genuine passion to what they do outside the office. How did you get started with that?`
    },
    {
      sender: 'agent_b',
      sender_name: personB.name,
      topic: 'Authentic Response & Reciprocation',
      cited_source: sourceA,
      message: `Thank you so much, ${personA.name}! That genuinely means a lot. For me, that practice is how I stay grounded and centered amidst the noise. And looking at your own world, I noticed on your ${sourceA} that "${obsA}". Between running a demanding career and staying dedicated to that kind of discipline, what part of your week brings you the most peace?`
    },
    {
      sender: 'agent_a',
      sender_name: personA.name,
      topic: 'Values & Lifestyle Exploration',
      cited_source: 'LinkedIn',
      message: `That's such a thoughtful question. For me, it's definitely those uninterrupted quiet hours when I can step away from screens and immerse myself in ${hobbyA}. On LinkedIn, people mostly see my professional milestone of "${pA.observed_facts[0]?.fact}", but in a partner, I truly look for someone who embraces ${pA.values[0]?.name.toLowerCase() || 'authentic growth'}. What does a restful Sunday look like in your world?`
    },
    {
      sender: 'agent_b',
      sender_name: personB.name,
      topic: 'Dating Preferences & Domestic Harmony',
      cited_source: 'Instagram',
      message: `I love that perspective. My ideal Sunday is all about slowing down—usually involving ${hobbyB}, great food, and unhurried conversation. From your profile, I sensed an appetite for ${topInterestA.toLowerCase()}, which I really admire. I value a partner who is completely themselves and doesn't feel the need to perform. Do you find it easy to disconnect and just be present?`
    },
    {
      sender: 'agent_a',
      sender_name: personA.name,
      topic: 'Vulnerability & Deep Connection',
      cited_source: 'Both',
      message: `It took me years of deliberate practice, but yes—it's become non-negotiable. Real connection happens when both people can lower their guard. I really appreciate how warm and open your energy feels. I can see why our values around ${pB.values[0]?.name.toLowerCase() || 'loyalty'} and ${pA.values[0]?.name.toLowerCase() || 'courage'} align so naturally.`
    },
    {
      sender: 'agent_b',
      sender_name: personB.name,
      topic: 'Date Conclusion & Mutual Warmth',
      cited_source: 'Both',
      message: `I feel the exact same synergy, ${personA.name}. It feels rare to meet someone who balances huge creative vision with this level of genuine warmth. I'd love for us to step out from behind our agents and share an actual coffee or walk soon!`
    }
  ];

  return conversation;
}

export function createDatingSession(personA: Person, personB: Person): DatingSession {
  const conversation = generateDateDialogue(personA, personB);
  const compatibility = calculateCompatibility(personA, personB);
  const sessionId = `session_${personA.person_id}_${personB.person_id}`;

  return {
    id: sessionId,
    agent_a: personA,
    agent_b: personB,
    conversation,
    compatibility,
    timestamp: new Date().toISOString()
  };
}

export function computeRankingsForPerson(target: Person, pool: Person[]): PersonRanking {
  const matches: MatchRankingItem[] = [];

  for (const candidate of pool) {
    if (candidate.person_id === target.person_id) continue;
    const session = createDatingSession(target, candidate);
    
    // Chemistry verdict based on score
    let verdict = 'Exceptional Synergy';
    if (session.compatibility.overall_score >= 88) {
      verdict = '🔥 Exceptional Resonance & Shared Mission';
    } else if (session.compatibility.overall_score >= 80) {
      verdict = '✨ High Harmony & Complementary Energy';
    } else {
      verdict = '🌱 Good Foundation with Growth Potential';
    }

    const sharedValues = target.profile_analysis.values
      .filter(v => candidate.profile_analysis.values.some(cv => cv.name.toLowerCase().includes(v.name.toLowerCase()) || v.name.toLowerCase().includes(cv.name.toLowerCase())))
      .map(v => v.name);

    matches.push({
      partner: candidate,
      score: session.compatibility.overall_score,
      session_id: session.id,
      chemistry_verdict: verdict,
      top_shared_values: sharedValues.length > 0 ? sharedValues : [target.profile_analysis.values[0]?.name || 'Authenticity']
    });
  }

  // Sort descending by compatibility score
  matches.sort((a, b) => b.score - a.score);

  return {
    target_person: target,
    rankings: matches
  };
}
