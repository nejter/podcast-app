import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

interface IHeader {
  isLoading: boolean;
}

const Header: React.FC<IHeader> = ({ isLoading }) => (
  <>
    <div className="header-container">
      <Link to={`/`}>
        <h1>Podcaster</h1>
      </Link>
      {isLoading && <Loader />}
    </div>
    <hr />
  </>
);

export default Header;
