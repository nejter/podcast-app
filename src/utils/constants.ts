const BASE_URL = 'https://itunes.apple.com';
export const PODCASTS_URL = (limit: number) =>
  `${BASE_URL}/us/rss/toppodcasts/limit=${limit}/genre=1310/json`;
export const PODCAST_DETAIL_URL = (id: string) =>
  `${BASE_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
export const TOP_PODCAST_LIMIT = 100;
export const ONE_DAY_MS = 86400000; // 1 day in milliseconds
