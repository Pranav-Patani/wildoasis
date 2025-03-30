import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fjzqiwgdtcteqrbskdbk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqenFpd2dkdGN0ZXFyYnNrZGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDA3MDMsImV4cCI6MjA1ODQ3NjcwM30.hZOJai5XWiO34z2Tk93_3lpkhAkp2QTcCvq5BF5p2sU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
