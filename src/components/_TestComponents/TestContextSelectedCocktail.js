import React from 'react';
import { useSelectedCocktailContext } from '../../context/use-context';
import styled from 'styled-components/macro';

const TestContextSelectedCocktail = () => {
  const { selectedCocktail, updateSelectedCocktail, clearSelectedCocktail } =
    useSelectedCocktailContext();

  const clickHandlerUpdate = () => updateSelectedCocktail(11007);
  const clickHandlerClear = () => clearSelectedCocktail();

  return (
    <Wrapper>
      <h2>Test Cocktail Details</h2>
      <button onClick={clickHandlerUpdate}>Update Cocktail</button>
      <button onClick={clickHandlerClear}>Clear Cocktail</button>
      {selectedCocktail?.data && (
        <>
          <p>id: {selectedCocktail.data.idDrink}</p>
          <p>name: {selectedCocktail.data.strDrink}</p>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default TestContextSelectedCocktail;
