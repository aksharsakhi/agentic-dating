import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ personId: string }> }
) {
  const { personId } = await params;
  const ranking = store.getRankingsForPerson(personId);

  if (!ranking) {
    return NextResponse.json({ error: 'Person not found or unable to compute rankings' }, { status: 404 });
  }

  return NextResponse.json(ranking);
}
