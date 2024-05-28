import React from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '../../services/podcastService';
import { Episode } from '../../models/podcast';
import './episodeDetailView.css';
import Header from '../../shared-components/Header';
import PodcastSummary from '../../shared-components/PodcastSummary';
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
  const artistName = podcastDetails?.[0]?.artistName;

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

  const { collectionName, imgSrc, episodeUrl, trackName, description } =
    episode || {};

  return (
    <div className="podcast-detail-view">
      <Header />
      <div className="podcast-summary-container">
        <PodcastSummary
          artistName={artistName}
          collectionName={collectionName}
          imgSrc={imgSrc}
        />
        <main className="episodes-section box-with-shadow p-10 mt-20">
          <div className="episode-info">
            <EpisodeInfo trackName={trackName} description={description} />
            {episodeUrl && <EpisodeAudio episodeUrl={episodeUrl} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EpisodeDetailView;
