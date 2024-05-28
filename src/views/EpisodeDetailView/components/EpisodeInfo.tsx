import React from 'react';
import { Episode } from '../../../models/podcast';

interface IEpisodeInfo {
  trackName?: Episode['trackName'];
  description?: Episode['description'];
}

const EpisodeInfo: React.FC<IEpisodeInfo> = ({ trackName, description }) => {
  return (
    <div>
      <h3>{trackName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EpisodeInfo;
