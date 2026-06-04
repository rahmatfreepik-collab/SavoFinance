import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Membaca kunci rahasia server tanpa awalan PUBLIC_
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

const kunciAktif = supabaseServiceKey || supabaseAnonKey;

export const supabase = createClient(supabaseUrl, kunciAktif);