import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainView from './views/MainView';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainView />} />
    </Routes>
  </Router>
);

export default App;
