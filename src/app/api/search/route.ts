import { NextRequest, NextResponse } from 'next/server';
import { searchSite } from '@/lib/search';
import { Locale } from '@/lib/translations';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.trim() ?? '';
  const localeParam = request.nextUrl.searchParams.get('locale') ?? 'en';
  const locale: Locale = localeParam === 'ar' ? 'ar' : 'en';

  if (!query) {
    return NextResponse.json({ success: true, results: [], query: '' });
  }

  try {
    const results = await searchSite(query, locale);
    return NextResponse.json({ success: true, results, query });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ success: false, message: 'Search failed.' }, { status: 500 });
  }
}
