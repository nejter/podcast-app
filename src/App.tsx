import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import PodcastDetailView from './views/PodcastDetailView/PodcastDetailView';
import EpisodeDetailView from './views/EpisodeDetailView/EpisodeDetailView';
import './app.css';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/podcast/:podcastId" element={<PodcastDetailView />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<EpisodeDetailView />}
      />
    </Routes>
  </Router>
);

export default App;
