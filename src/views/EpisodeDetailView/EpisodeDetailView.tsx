import React from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '../../services/podcastService';
import { Episode } from '../../models/podcast';
import './episodeDetailView.css';
import EpisodeAudio from './components/EpisodeAudio';
import EpisodeInfo from './components/EpisodeInfo';

const EpisodeDetailView: React.FC = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();

  if (!podcastId || !episodeId) {
    console.error('Error: Podcast ID or Episode ID is missing.');
    return;
  }

  const { data: podcastDetails, error } = usePodcastDetails(podcastId);

  if (error) {
    console.error('Error loading episode details');
  }

  const episode = podcastDetails?.find(
    (ep: Episode) => ep.trackId === Number(episodeId),
  );

  if (podcastDetails && !episode) {
    console.error('Error: Episode not found.');
    return;
  }

  const { episodeUrl, trackName, description } = episode || {};

  return (
    <main className="episodes-section box-with-shadow p-10 mt-20">
      <div className="episode-info">
        <EpisodeInfo trackName={trackName} description={description} />
        {episodeUrl && <EpisodeAudio episodeUrl={episodeUrl} />}
      </div>
    </main>
  );
};

export default EpisodeDetailView;
