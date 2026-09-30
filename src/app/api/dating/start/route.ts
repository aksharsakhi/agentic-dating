import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { createDatingSession } from '@/lib/datingEngine';

export async function POST(req: NextRequest) {
  try {
    const { person_a_id, person_b_id } = await req.json();

    if (!person_a_id || !person_b_id) {
      return NextResponse.json(
        { error: 'person_a_id and person_b_id are required.' },
        { status: 400 }
      );
    }

    if (person_a_id === person_b_id) {
      return NextResponse.json(
        { error: 'An agent cannot date itself.' },
        { status: 400 }
      );
    }

    const personA = store.getPersonById(person_a_id);
    const personB = store.getPersonById(person_b_id);

    if (!personA || !personB) {
      return NextResponse.json(
        { error: 'One or both individuals were not found in the dating pool.' },
        { status: 404 }
      );
    }

    const sessionId = `session_${personA.person_id}_${personB.person_id}`;
    let session = store.getSession(sessionId);

    if (!session) {
      session = createDatingSession(personA, personB);
      store.saveSession(session);
    }

    return NextResponse.json({
      success: true,
      session
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Failed to initiate agent dating session.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
