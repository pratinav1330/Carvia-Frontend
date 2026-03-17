const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function fetchJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  if (!response.ok) throw new Error('Failed to fetch jobs');
  return response.json();
}

export async function searchJobs(keyword = 'developer') {
  const response = await fetch(`${BASE_URL}/search?keyword=${encodeURIComponent(keyword)}`);
  if (!response.ok) throw new Error('Search failed');
  return response.json();
}

export async function searchLinkedInJobs(keyword = 'developer') {
  const response = await fetch(`${BASE_URL}/linkedin-jobs?keyword=${encodeURIComponent(keyword)}`);
  if (!response.ok) throw new Error('LinkedIn search failed');
  return response.json();
}
