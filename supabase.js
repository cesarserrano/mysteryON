// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://syqpjvlbarbywshulpdt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cXBqdmxiYXJieXdzaHVscGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MzQ4ODEsImV4cCI6MjA3MDAxMDg4MX0.kIpFY_A671sepJbqCzAuNRQXabX5Z4GG9BZitXFuDDM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 