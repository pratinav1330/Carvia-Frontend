import { supabase } from '../config/supabase';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function getAuthHeaders() {
  const { data: { session } } = await supabase.auth.getSession();
  return {
    'Content-Type': 'application/json',
    'Authorization': session ? `Bearer ${session.access_token}` : '',
  };
}

export async function fetchJobs() {
  const headers = await getAuthHeaders();
  const response = await fetch(`${BASE_URL}/jobs`, { headers });
  if (!response.ok) throw new Error('Failed to fetch jobs');
  return response.json();
}

export async function searchJobs(keyword = 'developer') {
  const headers = await getAuthHeaders();
  const response = await fetch(`${BASE_URL}/search?keyword=${encodeURIComponent(keyword)}`, { headers });
  if (!response.ok) throw new Error('Search failed');
  return response.json();
}

export async function searchLinkedInJobs(keyword = 'developer') {
  const headers = await getAuthHeaders();
  const response = await fetch(`${BASE_URL}/linkedin-jobs?keyword=${encodeURIComponent(keyword)}`, { headers });
  if (!response.ok) throw new Error('LinkedIn search failed');
  return response.json();
}
