import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTopPodcasts } from '../../services/podcastService';
import { Podcast } from '../../models/podcast';
import './mainView.css';
import Header from '../../components/Header';

const MainView: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const { data: podcasts, error } = useTopPodcasts();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const filteredPodcasts = podcasts?.filter(
    (podcast: Podcast) =>
      podcast.title.toLowerCase().includes(filterText.toLowerCase()) ||
      podcast.author.toLowerCase().includes(filterText.toLowerCase()),
  );

  if (error) {
    console.error('Error loading podcast.');
    return;
  }

  return (
    <div className="main-view">
      <Header />
      <div className="filter-container">
        {(filteredPodcasts?.length || podcasts?.length) && (
          <span className="item-count">
            {filteredPodcasts?.length || podcasts?.length}
          </span>
        )}
        <input
          type="text"
          value={filterText}
          onChange={handleFilterChange}
          placeholder="Filter podcasts..."
          className="filter-input"
        />
      </div>
      <div className="podcast-grid">
        {filteredPodcasts?.map((podcast) => {
          const { id, imgSrc, title, author } = podcast;
          return (
            <div key={id} className="podcast-card">
              <Link to={`/podcast/${id}`} className="podcast-link">
                <img src={imgSrc} alt={title} className="author-image" />
                <h2 className="podcast-title">{title}</h2>
                <p className="podcast-author">Author: {author}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainView;
