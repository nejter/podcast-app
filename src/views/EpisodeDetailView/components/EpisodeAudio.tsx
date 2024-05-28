import React, { useState } from 'react';
import { Episode } from '../../../models/podcast';
import Loader from '../../../shared-components/Loader';

interface IEpisodeAudio {
  episodeUrl: Episode['episodeUrl'];
}

const EpisodeAudio: React.FC<IEpisodeAudio> = ({ episodeUrl }) => {
  const [isLoadingAudio, setIsLoadingAudio] = useState(true);

  return (
    <div>
      <audio
        controls
        src={episodeUrl}
        onLoadStart={() => setIsLoadingAudio(true)}
        onCanPlay={() => setIsLoadingAudio(false)}
        className={isLoadingAudio ? 'audio-loading' : ''}
      />
      {isLoadingAudio && <Loader textInfo="Loading audio..." />}
    </div>
  );
};

export default EpisodeAudio;
