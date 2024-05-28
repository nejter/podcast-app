import { Entry, Episode, EpisodeApi, Podcast } from './podcast';

export const mapPodcastEntryToPodcast = (entry: Entry): Podcast => {
  return {
    id: entry.id.attributes['im:id'],
    title: entry['im:name'].label,
    author: entry['im:artist'].label,
    imgSrc: entry['im:image'][0]?.label,
  };
};

export const mapApiEpisodeToEpisode = (episode: EpisodeApi): Episode => {
  return {
    trackName: episode.trackName,
    trackId: episode.trackId,
    trackTimeMillis: episode.trackTimeMillis || 0,
    releaseDate: episode.releaseDate,
    episodeUrl: episode.episodeUrl,
    artistName: episode.artistName,
    collectionName: episode.collectionName,
    imgSrc: episode.artworkUrl60,
    description: episode.description,
  };
};
