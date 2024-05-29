import React from 'react';
import { Episode } from '../../../models/podcast';
import Loader from '../../../shared-components/Loader';
import { useOutletContext } from 'react-router-dom';

interface IEpisodeAudio {
  episodeUrl: Episode['episodeUrl'];
}

interface IOutletContext {
  setIsLoadingAudio: (value: boolean) => void;
  isLoadingAudio: boolean;
}

const EpisodeAudio: React.FC<IEpisodeAudio> = ({ episodeUrl }) => {
  const { isLoadingAudio, setIsLoadingAudio } =
    useOutletContext<IOutletContext>();

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
