import React from 'react';

interface ILoader {
  textInfo?: string;
}

const Loader: React.FC<ILoader> = ({ textInfo }) => (
  <div className="loader-wrapper">
    <div className="loader" />
    {textInfo && <div>{textInfo}</div>}
  </div>
);

export default Loader;
