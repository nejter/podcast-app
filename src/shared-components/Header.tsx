import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <>
    <Link to={`/`}>
      <h1>Podcaster</h1>
    </Link>
    <hr />
  </>
);

export default Header;
