import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://github.com/capol01/ZbraneLevne";
const SUPABASE_ANON_KEY = "sb_publishable_copz8it1bfAkMsnPUH9cPg_X4oBmM2x";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
