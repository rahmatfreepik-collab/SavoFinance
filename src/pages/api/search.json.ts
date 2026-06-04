import { supabase } from '../../lib/supabase';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  // SESUAIKAN: Ganti 'posts' dengan nama tabel Anda di Supabase,
  // dan 'title' dengan nama kolom judul artikel/halaman Anda.
  const { data, error } = await supabase
    .from('posts') 
    .select('title, slug, category') 
    .ilike('title', `%${query}%`); // Mencari keyword yang mirip

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}