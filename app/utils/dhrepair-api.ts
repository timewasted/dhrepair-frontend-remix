export function apiUrl({ endpoint }: { endpoint: string }) {
  return `${process.env.API_ENDPOINT}/${endpoint}`;
}
