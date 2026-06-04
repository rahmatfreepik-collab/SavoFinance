import { supabase } from '../../lib/supabase';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify({ count: 0 }), { status: 200 });
  }

  // Hitung dari kedua tabel secara bersamaan
  const [postsCountRes, newsCountRes] = await Promise.all([
    supabase.from('posts').select('*', { count: 'exact', head: true }).ilike('title', `%${query}%`),
    supabase.from('news').select('*', { count: 'exact', head: true }).ilike('title', `%${query}%`)
  ]);

  if (postsCountRes.error || newsCountRes.error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch counts' }), { status: 500 });
  }

  // Jumlahkan totalnya
  const totalCount = (postsCountRes.count || 0) + (newsCountRes.count || 0);

  return new Response(JSON.stringify({ count: totalCount }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}