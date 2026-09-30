import { NextRequest, NextResponse } from 'next/server';
import { ProfileResearchService } from '@/lib/profileResearchService';

export async function POST(req: NextRequest) {
  try {
    const { linkedin_url, instagram_url } = await req.json();

    if (!linkedin_url || !instagram_url) {
      return NextResponse.json(
        { error: 'Both LinkedIn URL and Instagram URL are required.' },
        { status: 400 }
      );
    }

    const service = new ProfileResearchService();
    const analyzedPerson = await service.analyzeAndCreatePerson(linkedin_url, instagram_url);

    return NextResponse.json({
      success: true,
      analysis: analyzedPerson.profile_analysis,
      agent_config: analyzedPerson.agent_config,
      preview: analyzedPerson
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unable to retrieve public profile data from this URL.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 422 }
    );
  }
}
