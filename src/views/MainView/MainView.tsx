import React, { useCallback, useState } from 'react';
import { useTopPodcasts } from '../../services/podcastService';
import { Podcast } from '../../models/podcast';
import './mainView.css';
import Header from '../../shared-components/Header';
import Filter from './components/Filter';
import PodcastCounter from './components/PodcastCounter';
import PodcastCard from './components/PodcastCard';

const MainView: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const { data: podcasts, error, isLoading } = useTopPodcasts();

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterText(event.target.value);
    },
    [],
  );

  const filteredPodcasts = podcasts?.filter(
    (podcast: Podcast) =>
      podcast.title.toLowerCase().includes(filterText.toLowerCase()) ||
      podcast.author.toLowerCase().includes(filterText.toLowerCase()),
  );

  const podcastsAmount =
    filteredPodcasts?.length || (!filteredPodcasts && podcasts?.length);

  if (error) {
    console.error('Error loading podcast.');
    return;
  }

  return (
    <div className="main-view">
      <Header isLoading={isLoading} />
      <div className="filter-container">
        {!!podcastsAmount && <PodcastCounter amount={podcastsAmount} />}
        <Filter
          filterText={filterText}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="podcast-grid">
        {filteredPodcasts?.map((podcast) => {
          return <PodcastCard key={podcast.id} podcast={podcast} />;
        })}
      </div>
    </div>
  );
};

export default MainView;
