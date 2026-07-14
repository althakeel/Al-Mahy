import { NextResponse } from 'next/server';
import { deleteBlogFromMongo } from '@/lib/blogs-server';

const deleteBlogViaDevelopmentFallback = async (id: string): Promise<boolean> => {
  if (process.env.NODE_ENV !== 'development') return false;

  const fallbackUrl = process.env.BLOGS_FALLBACK_API_URL?.trim();
  if (!fallbackUrl) return false;

  try {
    const response = await fetch(`${fallbackUrl.replace(/\/$/, '')}/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      cache: 'no-store',
    });
    const result = (await response.json()) as { success?: boolean };
    return response.ok && Boolean(result.success);
  } catch (error) {
    console.error('Development blogs delete fallback failed:', error);
    return false;
  }
};

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ success: false, message: 'Blog id is required.' }, { status: 400 });
    }

    try {
      await deleteBlogFromMongo(id);
      return NextResponse.json({ success: true });
    } catch (mongoError) {
      console.error('Blogs DELETE error:', mongoError);
      if (await deleteBlogViaDevelopmentFallback(id)) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ success: false, message: 'Failed to delete blog.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Blogs DELETE error:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete blog.' }, { status: 500 });
  }
}