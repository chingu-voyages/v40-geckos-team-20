import React from 'react';
import {
  useCocktailListContext,
  useFiltersContext,
} from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';

console.log(CONTEXT_STATUS);

const Test_Context = () => {
  const { cocktails, searchCocktails, getRandomCocktails, clearCocktails } =
    useCocktailListContext();

  const clickHandlerRandom = () => getRandomCocktails(6);
  const clickHandlerSearch = () => searchCocktails('summer');
  const clickHandlerClear = () => clearCocktails();

  console.log('cocktails state: ', cocktails);

  return (
    <div>
      <h2>Test Cocktail List</h2>
      <button onClick={clickHandlerRandom}>Get Random List</button>
      <button onClick={clickHandlerSearch}>Search</button>
      <button onClick={clickHandlerClear}>Clear List</button>
      {cocktails?.drinks?.length &&
        cocktails.drinks.map((cocktail, i) => (
          <p key={i}>{cocktail.strDrink}</p>
        ))}
    </div>
  );
};

export default Test_Context;
