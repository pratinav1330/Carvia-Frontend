import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://naqinvrergiatkbxhapt.supabase.co';
const supabaseAnonKey = 'sb_publishable_1-QsUdjetCUetrNdcImtSA_ptE6aOqX';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
