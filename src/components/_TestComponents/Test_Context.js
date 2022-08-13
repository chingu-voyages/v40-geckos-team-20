import React from 'react';
import { useCocktailContext } from '../../context/use-cocktailContext';
import { CONTEXT_STATUS } from '../../context/constants';

console.log(CONTEXT_STATUS);

const Test_Context = () => {
  const { cocktails, searchCocktails, getRandomCocktails, clearCocktails } =
    useCocktailContext();

  const clickHandlerRandom = () => getRandomCocktails(6);
  const clickHandlerSearch = () => searchCocktails('summer');
  const clickHandlerClear = () => clearCocktails();

  console.log(cocktails);

  return (
    <div>
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
