import React from 'react';
import { useFiltersContext } from '../../context/use-context';

const TestContextFilters = () => {
  const { filters, getAllFilters, updateFilters, clearAllFilters } =
    useFiltersContext();

  const testFilters = {
    categories: ['a', 'b', 'c'],
    glasses: ['tall', 'short'],
    alcoholic: ['alcoholic'],
    misc1: { a: 1, b: 2 },
    misc2: [1, 2, 3, 4, 5],
    misc3: 1,
    misc4: 'hello',
  };

  const clickHandlerGetFilters = () => getAllFilters();
  const clickHandlerUpdateFilter = () => updateFilters(testFilters);
  const clickHandlerClearFilter = () => clearAllFilters();

  console.log(filters);

  return (
    <div>
      <button onClick={clickHandlerGetFilters}>Get Fitlers</button>
      <button onClick={clickHandlerUpdateFilter}>Update Filter</button>
      <button onClick={clickHandlerClearFilter}>Clear Filter</button>
    </div>
  );
};

export default TestContextFilters;
