import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import './PodcastDetailView.css';
import Header from '../../shared-components/Header';
import { usePodcastDetails } from '../../services/podcastService';
import PodcastSummary from '../../shared-components/PodcastSummary';
import AmountOfEpisodes from './components/AmountOfEpisodes';
import EpisodesTable from './components/EpisodesTable';
import useEpisodeTableVisibility from './hooks/useEpisodeTableVisibility';

const PodcastDetailView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { isVisible, hideTable } = useEpisodeTableVisibility();
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);

  if (!podcastId) {
    console.error('Error: Podcast ID is missing.');
    return null;
  }

  const {
    data: podcastDetails,
    error,
    isLoading,
  } = usePodcastDetails(podcastId);

  const amountOfEpisodes = podcastDetails?.length;

  if (error) {
    console.error("Error loading podcast's details.");
    return null;
  }

  const { artistName, collectionName, imgSrc } = podcastDetails?.[0] || {};

  return (
    <div className="podcast-detail-view">
      <Header isLoading={isLoading || isLoadingAudio} />
      <div className="podcast-summary-container">
        <PodcastSummary
          artistName={artistName}
          collectionName={collectionName}
          imgSrc={imgSrc}
        />
        <Outlet context={{ isLoadingAudio, setIsLoadingAudio }} />
        {isVisible && !!amountOfEpisodes && (
          <main className="episodes-section">
            <AmountOfEpisodes amount={amountOfEpisodes} />
            <EpisodesTable
              podcastId={podcastId}
              podcastDetails={podcastDetails}
              onEpisodeLinkClick={hideTable}
            />
          </main>
        )}
      </div>
    </div>
  );
};

export default PodcastDetailView;
