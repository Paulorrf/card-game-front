const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined.");
}

export async function fetchWrapper(
  endpoint: string,
  options: RequestInit = {}
) {
  const response = await fetch(`${endpoint}`, {
    ...options,
    cache: "no-cache",
  });
  /*
  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    cache: "no-cache",
  });
  */

  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }

  return response.json();
}
