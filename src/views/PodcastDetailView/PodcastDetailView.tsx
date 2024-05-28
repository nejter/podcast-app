import React from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '../../services/podcastService';
import { Episode } from '../../models/podcast';
import { formatDuration } from '../../utils/utils';

const PodcastDetailView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  if (!podcastId) {
    console.error('Error: Podcast ID is missing.');
    return;
  }

  const { data: podcastDetails, error } = usePodcastDetails(podcastId);

  if (error) {
    console.error("Error loading podcast's details.");
    return;
  }
  return (
    <div>
      <main>
        <ul>
          {podcastDetails?.map((episode: Episode) => {
            const { trackId, trackName, releaseDate, trackTimeMillis } =
              episode;
            return (
              <li key={trackId}>
                <a href={`/podcast/${podcastId}/episode/${trackId}`}>
                  {trackName}
                </a>
                <p>{new Date(releaseDate).toLocaleDateString()}</p>
                {!!trackTimeMillis && <p>{formatDuration(trackTimeMillis)}</p>}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default PodcastDetailView;
