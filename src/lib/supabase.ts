import { createClient } from '@supabase/supabase-js';

// KITA TULIS LANGSUNG NILAINYA DI SINI (Hardcode)
// Jangan gunakan import.meta.env dulu untuk pengetesan ini
const supabaseUrl = "https://xhlbdjpdmzcyyyuehlql.supabase.co";
const supabaseAnonKey = "sb_publishable_knKW83Pt7_CuNn-WQ1vQQA_7JFqLja8";

// Jika masih error di sini, berarti masalahnya ada di instalasi Supabase, bukan variabel
export const supabase = createClient(supabaseUrl, supabaseAnonKey);