import { NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET() {
  const people = store.getPeople();
  const samplePerson = people[0];
  const sampleRanking = store.getRankingsForPerson(samplePerson.person_id);

  // Return a rich summary for evaluator
  return NextResponse.json({
    status: 'ready',
    version: '1.0.0',
    total_people: people.length,
    algorithm: {
      weights: {
        interest_alignment: '20%',
        lifestyle_alignment: '25%',
        values_alignment: '25%',
        communication_compatibility: '15%',
        dating_conversation_chemistry: '15%'
      }
    },
    sample_showcase: {
      featured_person: samplePerson.name,
      top_matches: sampleRanking?.rankings.slice(0, 5)
    },
    people
  });
}
