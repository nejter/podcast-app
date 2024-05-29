import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EpisodeDetailView from './views/EpisodeDetailView/EpisodeDetailView';
import MainView from './views/MainView/MainView';
import PodcastDetailView from './views/PodcastDetailView/PodcastDetailView';
import './app.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="podcast/:podcastId" element={<PodcastDetailView />}>
          <Route path="episode/:episodeId" element={<EpisodeDetailView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
