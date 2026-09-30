import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = store.getSession(id);

  if (!session) {
    return NextResponse.json({ error: 'Dating session not found' }, { status: 404 });
  }

  return NextResponse.json(session);
}
