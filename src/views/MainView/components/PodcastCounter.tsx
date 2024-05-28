import React from 'react';

interface IPodcastCounter {
  amount: number;
}

const PodcastCounter: React.FC<IPodcastCounter> = ({ amount }) => {
  return <span className="item-count">{amount}</span>;
};

export default PodcastCounter;
