import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kyxqvngjypzvxnoffgoj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5eHF2bmdqeXB6dnhub2ZmZ29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMzg5NDQsImV4cCI6MjEwNjkxNDk0NH0.CIcjtW8D-g2X6HLLqoCsSh2psgp_Siij33aWXzas-oo"; // Copy your publishable key from Supabase → Connect

export const supabase = createClient(supabaseUrl, supabaseKey);
