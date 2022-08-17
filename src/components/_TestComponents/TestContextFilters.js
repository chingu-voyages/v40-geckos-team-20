import React from 'react';
import { useFiltersContext } from '../../context/use-context';
import styled from 'styled-components/macro';

const TestContextFilters = () => {
  const { filters, getAllFilters, updateFilters, clearSelectedFilters } =
    useFiltersContext();

  const testFilters = {
    categories: ['a', 'b', 'c'],
    glasses: ['tall', 'short'],
    alcoholic: ['alcoholic', 'another'],
    misc1: { a: 1, b: 2 },
    misc2: [1, 2, 3, 4, 5],
    misc3: 1,
    misc4: 'hello',
  };

  const clickHandlerGetFilters = () => getAllFilters();
  const clickHandlerUpdateFilter = () => updateFilters(testFilters);
  const clickHandlerClearFilter = () => clearSelectedFilters();

  console.log(filters);

  return (
    <Wrapper>
      <h2>Test Filters</h2>
      <button onClick={clickHandlerGetFilters}>Get Fitlers</button>
      <button onClick={clickHandlerUpdateFilter}>Update Filter</button>
      <button onClick={clickHandlerClearFilter}>Clear Filter</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default TestContextFilters;
