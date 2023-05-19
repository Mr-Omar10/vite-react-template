import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient("https://pnljslyqugavwsjzkwun.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubGpzbHlxdWdhdndzanprd3VuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDQ0MDc1NywiZXhwIjoyMDAwMDE2NzU3fQ.8UrBU2lqulHQubMymkyOLFJNy210e046iE5cu3ebzDk")