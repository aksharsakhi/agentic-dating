import { NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET() {
  const people = store.getPeople();
  return NextResponse.json({
    total: people.length,
    people
  });
}
