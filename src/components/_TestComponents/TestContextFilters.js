import React, { useEffect } from 'react';
import { useFiltersContext } from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import styled from 'styled-components/macro';

const TestContextFilters = () => {
  const { filters, getAllFilters, updateFilters, clearSelectedFilters } =
    useFiltersContext();

  useEffect(() => {
    filters.allFilters &&
      console.log('All available filter values:', filters.allFilters);
  }, [filters.allFilters]);

  const { status, error, selectedFilters } = filters;
  const { LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;

  const testFiltersOne = {
    categories: ['Punch / Party Drink', 'Coffee / Tea'],
    glasses: ['Punch Bowl', 'Irish coffee cup'],
    alcoholic: ['Non alcoholic'],
  };
  const testFiltersTwo = {
    categories: ['Punch / Party Drink'],
    glasses: [],
  };

  const clickHandlerGetFilters = async () => getAllFilters();
  const clickHandlerUpdateFilterOne = () => updateFilters(testFiltersOne);
  const clickHandlerUpdateFilterTwo = () => updateFilters(testFiltersTwo);
  const clickHandlerClearFilter = () => clearSelectedFilters();

  return (
    <Wrapper>
      <h2>Test Filters</h2>
      <ApiButton onClick={clickHandlerGetFilters}>Get Filters</ApiButton>
      <button onClick={clickHandlerUpdateFilterOne}>Update Filter 1</button>
      <button onClick={clickHandlerUpdateFilterTwo}>Update Filter 2</button>
      <button onClick={clickHandlerClearFilter}>Clear Filter</button>
      {status === LOADING && <p>Loading all filters...</p>}
      {status === SUCCESS && (
        <p>All filters loaded! Check browser console logs</p>
      )}
      {status === ERROR && <p>{error.message}</p>}
      {selectedFilters && <Filters filters={selectedFilters} />}
    </Wrapper>
  );
};

const Filters = ({ filters }) => {
  const { categories = null, glasses = null, alcoholic = null } = filters;
  return (
    <>
      <h3>Selected Filters</h3>
      <p>Categories:</p>
      <ul>{categories && categories.map((f, i) => <li key={i}>{f}</li>)}</ul>
      <p>Glasses:</p>
      <ul>{glasses && glasses.map((f, i) => <li key={i}>{f}</li>)}</ul>
      <p>Alcoholic:</p>
      <ul>{alcoholic && alcoholic.map((f, i) => <li key={i}>{f}</li>)}</ul>
    </>
  );
};

const Wrapper = styled.div`
  color: white;
  button {
    cursor: pointer;
  }
`;

const ApiButton = styled.button`
  background-color: orange;
`;

export default TestContextFilters;
