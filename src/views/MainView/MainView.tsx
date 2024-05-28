import React from 'react';
import { Link } from 'react-router-dom';
import { useTopPodcasts } from '../../services/podcastService';

const MainView: React.FC = () => {
  const { data: podcasts, error } = useTopPodcasts();

  if (error) {
    console.error('Error loading podcast.');
    return;
  }

  return (
    <div>
      <ul>
        {podcasts?.map((podcast) => (
          <li key={podcast.id}>
            <Link to={`/podcast/${podcast.id}`}>{podcast.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainView;
