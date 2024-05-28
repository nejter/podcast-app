import React from 'react';

interface ILoader {
  textInfo: string;
}

const Loader: React.FC<ILoader> = ({ textInfo }) => (
  <div className="loader-wrapper">
    <div className="loader" />
    <div className="loader-text">{textInfo}</div>
  </div>
);

export default Loader;
