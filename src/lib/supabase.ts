import { createClient } from '@supabase/supabase-js';

// Debug environment
console.log("ENV keys:", Object.keys(import.meta.env));
console.log("PUBLIC_SUPABASE_URL:", import.meta.env.PUBLIC_SUPABASE_URL);
console.log(
  "PUBLIC_SUPABASE_ANON_KEY ada:",
  !!import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
console.log(
  "SUPABASE_SERVICE_ROLE_KEY ada:",
  !!import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Membaca kunci rahasia server tanpa awalan PUBLIC_
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

const kunciAktif = supabaseServiceKey || supabaseAnonKey;

// Debug tambahan
console.log("supabaseUrl final:", supabaseUrl);
console.log("kunciAktif ada:", !!kunciAktif);

if (!supabaseUrl) {
  throw new Error("PUBLIC_SUPABASE_URL KOSONG");
}

if (!kunciAktif) {
  throw new Error("SUPABASE KEY KOSONG");
}

export const supabase = createClient(
  supabaseUrl,
  kunciAktif
);