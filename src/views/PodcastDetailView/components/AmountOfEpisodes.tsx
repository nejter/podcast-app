import React from 'react';

interface IAmountOfEpisodes {
  amount?: number;
}

const AmountOfEpisodes: React.FC<IAmountOfEpisodes> = ({ amount }) => {
  return (
    <div>
      {!!amount && <h2 className="box-with-shadow p-10">Episodes: {amount}</h2>}
    </div>
  );
};

export default AmountOfEpisodes;
