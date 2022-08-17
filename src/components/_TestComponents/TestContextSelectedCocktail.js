import React from 'react';
import { useSelectedCocktailContext } from '../../context/use-context';

const TestContextSelectedCocktail = () => {
  const { selectedCocktail, updateSelectedCocktail, clearSelectedCocktail } =
    useSelectedCocktailContext();

  const clickHandlerUpdate = () => updateSelectedCocktail(11007);
  const clickHandlerClear = () => clearSelectedCocktail();

  console.log('selectedCocktail state: ', selectedCocktail);

  return (
    <div>
      <h2>Test Cocktail Details</h2>
      <button onClick={clickHandlerUpdate}>Update Cocktail</button>
      <button onClick={clickHandlerClear}>Clear Cocktail</button>
      {selectedCocktail?.data && (
        <>
          <p>id: {selectedCocktail.data.idDrink}</p>
          <p>name: {selectedCocktail.data.strDrink}</p>
        </>
      )}
    </div>
  );
};

export default TestContextSelectedCocktail;
