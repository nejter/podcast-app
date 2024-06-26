import axios from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Entry, Episode, EpisodeApi, Podcast } from '../models/podcast';
import {
  ONE_DAY_MS,
  PODCASTS_URL,
  PODCAST_DETAIL_URL,
  TOP_PODCAST_LIMIT,
} from '../utils/constants';
import { queryKeys } from '../utils/queryKeys';
import {
  mapEpisodeApiToEpisodeEntity,
  mapEntryApiToPodcastEnity,
} from '../models/mappers';
import { experimental_createPersister as createPersister } from '@tanstack/react-query-persist-client';

export const fetchTopPodcasts = async (
  limit = TOP_PODCAST_LIMIT,
): Promise<Podcast[]> => {
  const response = await axios.get(PODCASTS_URL(limit));
  return response.data.feed.entry.map((entry: Entry) =>
    mapEntryApiToPodcastEnity(entry),
  );
};

export const fetchPodcastDetails = async (id: string) => {
  const response = await axios.get(PODCAST_DETAIL_URL(id));
  return response.data.results.map((episode: EpisodeApi) =>
    mapEpisodeApiToEpisodeEntity(episode),
  );
};

export const useTopPodcasts = (limit = TOP_PODCAST_LIMIT) => {
  const options: UseQueryOptions<Podcast[]> = {
    queryKey: [queryKeys.topPodcasts, limit],
    queryFn: () => fetchTopPodcasts(limit),
    staleTime: ONE_DAY_MS,
    gcTime: ONE_DAY_MS,
    persister: createPersister({
      storage: localStorage,
    }),
  };

  return useQuery<Podcast[]>(options);
};

export const usePodcastDetails = (id: string) => {
  const options: UseQueryOptions<Episode[]> = {
    queryKey: queryKeys.podcastDetails(id),
    queryFn: () => fetchPodcastDetails(id),
    staleTime: ONE_DAY_MS,
    gcTime: ONE_DAY_MS,
    persister: createPersister({
      storage: localStorage,
    }),
  };

  return useQuery<Episode[]>(options);
};
