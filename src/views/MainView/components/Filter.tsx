import React from 'react';

interface IFilter {
  filterText: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<IFilter> = ({ filterText, handleFilterChange }) => {
  return (
    <input
      type="text"
      value={filterText}
      onChange={handleFilterChange}
      placeholder="Filter podcasts..."
      className="filter-input"
    />
  );
};

export default Filter;
