import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '../../services/podcastService';
import { Episode } from '../../models/podcast';
import './episodeDetailView.css';

const EpisodeDetailView: React.FC = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const [isLoadingAudio, setIsLoadingAudio] = useState(true);

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

  return (
    <div>
      <main>
        {episode && (
          <audio
            controls
            src={episode.episodeUrl}
            onLoadStart={() => setIsLoadingAudio(true)}
            onCanPlay={() => setIsLoadingAudio(false)}
            className={isLoadingAudio ? 'audio-loading' : ''}
          />
        )}
        {isLoadingAudio && <div>Loading audio...</div>}
      </main>
    </div>
  );
};

export default EpisodeDetailView;
