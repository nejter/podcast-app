export const PODCASTS_URL = (limit: number) =>
  `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`;
export const PODCAST_DETAIL_URL = (id: string) =>
  `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
export const TOP_PODCAST_LIMIT = 100;
export const ONE_DAY_MS = 86400000; // 1 day in milliseconds
