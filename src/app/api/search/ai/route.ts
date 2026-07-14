import { NextRequest, NextResponse } from 'next/server';
import { getLegalAiAnswer } from '@/lib/gemini-legal-assistant';
import { searchSite } from '@/lib/search';
import { Locale } from '@/lib/translations';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { query?: string; locale?: string };
    const query = body.query?.trim() ?? '';
    const locale: Locale = body.locale === 'ar' ? 'ar' : 'en';

    if (!query) {
      return NextResponse.json({ success: false, message: 'Query is required.' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY?.trim()) {
      return NextResponse.json({ success: false, message: 'AI assistant is not configured.' }, { status: 503 });
    }

    const relatedResults = await searchSite(query, locale, 6);
    const ai = await getLegalAiAnswer(query, locale, relatedResults);

    if (!ai) {
      return NextResponse.json({ success: false, message: 'AI response unavailable.' }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      query,
      answer: ai.answer,
      disclaimer: ai.disclaimer,
      webSources: ai.webSources,
    });
  } catch (error) {
    console.error('Search AI API error:', error);
    return NextResponse.json({ success: false, message: 'AI search failed.' }, { status: 500 });
  }
}
