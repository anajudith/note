import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iydrennoiyhajcaqiuao.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZHJlbm5vaXloYWpjYXFpdWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDYzNjcsImV4cCI6MjAxMzEyMjM2N30.dkGeuDZSWbhAXoDPBacSL0u4Uhm6xsYerwNn49fq6sU"
);

export default supabase;
