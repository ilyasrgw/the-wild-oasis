import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qzhrscgkmcbymrblipqi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aHJzY2drbWNieW1yYmxpcHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNjY0ODcsImV4cCI6MjAzNDg0MjQ4N30.rc6T9uiAy0OK7UduZCBXeGrwndAYu_5kaWXwBiVrg-s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
