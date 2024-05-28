import React from 'react';
import { Episode } from '../../../models/podcast';
import { formatDuration } from '../../../utils/utils';

interface IEpisodesTable {
  podcastDetails: Episode[];
  podcastId: string;
}

const EpisodesTable: React.FC<IEpisodesTable> = ({
  podcastDetails,
  podcastId,
}) => {
  return (
    <table className="episodes-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {podcastDetails.slice(1).map((episode: Episode, index) => {
          const { trackId, trackName, releaseDate, trackTimeMillis } = episode;
          return (
            <tr
              key={trackId}
              className={index % 2 === 0 ? 'episodes-table-grey-row' : ''}
            >
              <td>
                <a href={`/podcast/${podcastId}/episode/${trackId}`}>
                  {trackName}
                </a>
              </td>
              <td>{new Date(releaseDate).toLocaleDateString()}</td>
              <td>{trackTimeMillis ? formatDuration(trackTimeMillis) : '-'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EpisodesTable;
