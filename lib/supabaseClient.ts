import { createClient } from "@supabase/supabase-js";

// These would normally come from environment variables
// For demo purposes, you'll need to replace these with your actual Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table structure for reference:
// Table name: mbti_submissions
// Columns:
// - id (uuid, primary key)
// - name (text)
// - contact (text)
// - location (text)
// - gender (text)
// - age (text)
// - mbti_type (text)
// - created_at (timestamp)

export interface MBTISubmission {
    id?: string;
    name: string;
    contact: string;
    location: string;
    gender: string;
    age: string;
    mbti_type: string;
    created_at?: string;
}
