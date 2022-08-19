import React from 'react';
import { useFiltersContext } from '../../context/use-context';
import styled from 'styled-components/macro';

const TestContextFilters = () => {
  const { filters, getAllFilters, updateFilters, clearSelectedFilters } =
    useFiltersContext();

  const testFiltersOne = {
    categories: ['Punch / Party Drink', 'Coffee / Tea'],
    glasses: ['Punch Bowl', 'Irish coffee cup'],
    alcoholic: ['Non alcoholic'],
  };
  const testFiltersTwo = {
    categories: ['Punch / Party Drink'],
    glasses: [],
  };

  const clickHandlerGetFilters = () => getAllFilters();
  const clickHandlerUpdateFilterOne = () => updateFilters(testFiltersOne);
  const clickHandlerUpdateFilterTwo = () => updateFilters(testFiltersTwo);
  const clickHandlerClearFilter = () => clearSelectedFilters();

  console.log(filters);

  return (
    <Wrapper>
      <h2>Test Filters</h2>
      <button onClick={clickHandlerGetFilters}>Get Filters</button>
      <button onClick={clickHandlerUpdateFilterOne}>Update Filter 1</button>
      <button onClick={clickHandlerUpdateFilterTwo}>Update Filter 2</button>
      <button onClick={clickHandlerClearFilter}>Clear Filter</button>
      <p>Categories:</p>
      <ul>
        {filters?.selectedFilters?.categories &&
          filters.selectedFilters.categories.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
      </ul>
      <p>Glasses:</p>
      <ul>
        {filters?.selectedFilters?.glasses &&
          filters.selectedFilters.glasses.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <p>Alcoholic:</p>
      <ul>
        {filters?.selectedFilters?.alcoholic &&
          filters.selectedFilters.alcoholic.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default TestContextFilters;
