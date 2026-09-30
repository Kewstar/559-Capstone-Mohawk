// frontend-supabase.ts 
import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

const global = globalThis as typeof globalThis & { __supabase?: SupabaseClient }

const supabase = (global.__supabase ??= createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
));

export default supabase; 