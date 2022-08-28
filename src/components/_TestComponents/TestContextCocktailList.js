import React from 'react';
import { useCocktailListContext } from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import styled from 'styled-components/macro';

const Test_Context = () => {
  const { cocktails, searchCocktails, getRandomCocktails, clearCocktails } =
    useCocktailListContext();

  const { status, error, drinks } = cocktails;
  const { LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;

  const clickHandlerRandom = () => getRandomCocktails(6);
  const clickHandlerSearch = () => searchCocktails('berry');
  const clickHandlerClear = () => clearCocktails();

  return (
    <Wrapper>
      <h2>Test Cocktail List</h2>
      <ApiButton onClick={clickHandlerRandom}>Get Random List</ApiButton>
      <ApiButton onClick={clickHandlerSearch}>Search</ApiButton>
      <button onClick={clickHandlerClear}>Clear List</button>
      {status === LOADING && <p>Loading...</p>}
      {status === SUCCESS &&
        !!drinks?.length &&
        drinks.map((cocktail, i) => <p key={i}>{cocktail.strDrink}</p>)}
      {status === ERROR && <p>{error.message}</p>}
    </Wrapper>
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

export default Test_Context;
