import React from 'react';
import { Podcast } from '../../../models/podcast';
import { Link } from 'react-router-dom';

interface IPodcastCard {
  podcast: Podcast;
}

const PodcastCard: React.FC<IPodcastCard> = ({ podcast }) => {
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
};

export default PodcastCard;
