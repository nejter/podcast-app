import { Entry, Episode, EpisodeApi, Podcast } from './podcast';

export const mapPodcastEntryToPodcast = (entry: Entry): Podcast => {
  return {
    id: entry.id.attributes['im:id'],
    title: entry['im:name'].label,
    author: entry['im:artist'].label,
  };
};

export const mapApiEpisodeToEpisode = (episode: EpisodeApi): Episode => {
  return {
    trackName: episode.trackName,
    trackId: episode.trackId,
    trackTimeMillis: episode.trackTimeMillis || 0,
    releaseDate: episode.releaseDate,
    episodeUrl: episode.episodeUrl,
  };
};
