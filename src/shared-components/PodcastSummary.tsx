import React from 'react';
import { Episode } from '../models/podcast';

interface IPodcastSummary {
  imgSrc?: Episode['imgSrc'];
  collectionName?: Episode['collectionName'];
  artistName?: Episode['artistName'];
}

const PodcastSummary: React.FC<IPodcastSummary> = ({
  imgSrc,
  collectionName,
  artistName,
}) => (
  <div className="podcast-summary box-with-shadow">
    <img src={imgSrc} alt={collectionName} className="podcast-image" />
    <div className="podcast-info">
      <h2>{collectionName}</h2>
      {artistName && <p className="podcast-author">by {artistName}</p>}
    </div>
  </div>
);

export default PodcastSummary;
