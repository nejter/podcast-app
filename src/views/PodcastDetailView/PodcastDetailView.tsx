import React from 'react';
import { useParams } from 'react-router-dom';
import './PodcastDetailView.css';
import Header from '../../shared-components/Header';
import { usePodcastDetails } from '../../services/podcastService';
import PodcastSummary from '../../shared-components/PodcastSummary';
import AmountOfEpisodes from './components/AmountOfEpisodes';
import EpisodesTable from './components/EpisodesTable';

const PodcastDetailView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  if (!podcastId) {
    console.error('Error: Podcast ID is missing.');
    return null;
  }

  const { data: podcastDetails, error } = usePodcastDetails(podcastId);

  if (error) {
    console.error("Error loading podcast's details.");
    return null;
  }

  const { artistName, collectionName, imgSrc } = podcastDetails?.[0] || {};

  return (
    <div className="podcast-detail-view">
      <Header />
      <div className="podcast-summary-container">
        <PodcastSummary
          artistName={artistName}
          collectionName={collectionName}
          imgSrc={imgSrc}
        />
        <main className="episodes-section">
          <AmountOfEpisodes amount={podcastDetails?.length} />
          {!!podcastDetails?.length && (
            <EpisodesTable
              podcastId={podcastId}
              podcastDetails={podcastDetails}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default PodcastDetailView;
