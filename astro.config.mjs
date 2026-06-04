// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare'; // 1. Mengubah import dari node ke cloudflare

// https://astro.build/config
export default defineConfig({
  // Mengaktifkan fitur server (SSR & Server Islands)
  output: 'server',

  // Konfigurasi gambar tetap dipertahankan agar gambar Supabase aman
  image: {
    domains: [
      'images.unsplash.com', 
      'xhlbdjpdmzcyyyuehlql.supabase.co' 
    ],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  // 2. Mengubah adapter dari node() menjadi cloudflare()
  adapter: cloudflare()
});