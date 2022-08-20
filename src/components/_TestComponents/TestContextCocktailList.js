import React from 'react';
import { useCocktailListContext } from '../../context/use-context';
import styled from 'styled-components/macro';

const Test_Context = () => {
  const { cocktails, searchCocktails, getRandomCocktails, clearCocktails } =
    useCocktailListContext();

  const clickHandlerRandom = () => getRandomCocktails(6);
  const clickHandlerSearch = () => searchCocktails('berry');
  const clickHandlerClear = () => clearCocktails();

  return (
    <Wrapper>
      <h2>Test Cocktail List</h2>
      <button onClick={clickHandlerRandom}>Get Random List</button>
      <button onClick={clickHandlerSearch}>Search</button>
      <button onClick={clickHandlerClear}>Clear List</button>
      {!!cocktails?.drinks?.length &&
        cocktails.drinks.map((cocktail, i) => (
          <p key={i}>{cocktail.strDrink}</p>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default Test_Context;
