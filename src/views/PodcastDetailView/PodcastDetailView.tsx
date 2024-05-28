import React from 'react';
import { useParams } from 'react-router-dom';
import { formatDuration } from '../../utils/utils';
import './PodcastDetailView.css';
import Header from '../../components/Header';
import { Episode } from '../../models/podcast';
import { usePodcastDetails } from '../../services/podcastService';

const PodcastDetailView: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  if (!podcastId) {
    console.error('Error: Podcast ID is missing.');
    return null;
  }

  const { data: podcastDetails, error } = usePodcastDetails(podcastId);

  if (error) {
    console.error("Error loading podcast's details.");
    return null;
  }

  const { artistName, collectionName, imgSrc } = podcastDetails?.[0] || {};

  return (
    <div className="podcast-detail-view">
      <Header />
      <div className="podcast-summary-container">
        <div className="podcast-summary">
          <img src={imgSrc} alt={collectionName} className="podcast-image" />
          <div className="podcast-info">
            <h2>{collectionName}</h2>
            <p className="podcast-author">by {artistName}</p>
          </div>
        </div>
        <main className="episodes-section">
          <h2>Episodes: {podcastDetails?.length}</h2>
          <table className="episodes-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {podcastDetails?.slice(1).map((episode: Episode) => {
                const { trackId, trackName, releaseDate, trackTimeMillis } =
                  episode;
                return (
                  <tr key={trackId}>
                    <td>
                      <a href={`/podcast/${podcastId}/episode/${trackId}`}>
                        {trackName}
                      </a>
                    </td>
                    <td>{new Date(releaseDate).toLocaleDateString()}</td>
                    <td>
                      {trackTimeMillis ? formatDuration(trackTimeMillis) : '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default PodcastDetailView;
