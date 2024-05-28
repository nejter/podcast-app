import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PodcastDetailView from './PodcastDetailView';
import { usePodcastDetails } from '../../services/podcastService';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    podcastId: '1',
  }),
}));

jest.mock('../../services/PodcastService');

const mockUsePodcastDetails = usePodcastDetails as jest.MockedFunction<
  typeof usePodcastDetails
>;

describe('PodcastDetailView', () => {
  it('displays podcast details and episodes', () => {
    const mockData = [
      {
        collectionName: 'Test Podcast',
        artistName: 'Test Author',
        description: 'Test Description',
        imgSrc: 'test-url',
        episodeUrl: 'test-url',
        trackName: 'Author Info',
        trackId: 1,
        trackTimeMillis: 60000,
        releaseDate: new Date(),
      },
      {
        collectionName: 'Test Podcast',
        artistName: 'Test Author',
        description: 'Test Description',
        trackName: 'Episode 1',
        imgSrc: 'test-url',
        trackId: 2,
        trackTimeMillis: 120000,
        releaseDate: new Date(),
        episodeUrl: 'test-url',
      },
      {
        collectionName: 'Test Podcast',
        artistName: 'Test Author',
        description: 'Test Description',
        trackName: 'Episode 2',
        imgSrc: 'test-url',
        trackId: 3,
        trackTimeMillis: 120000,
        releaseDate: new Date(),
        episodeUrl: 'test-url',
      },
    ];

    mockUsePodcastDetails.mockReturnValue({
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: true,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isLoadingError: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isRefetching: false,
      isStale: false,
      status: 'success',
      refetch: jest.fn(),
      data: mockData,
      isPending: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isInitialLoading: false,
      isPaused: false,
      fetchStatus: 'fetching',
    });

    render(
      <BrowserRouter>
        <PodcastDetailView />
      </BrowserRouter>,
    );

    expect(screen.getByText('Test Podcast')).toBeInTheDocument();
    expect(screen.getByText('by Test Author')).toBeInTheDocument();
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Episode 2')).toBeInTheDocument();
  });
});
