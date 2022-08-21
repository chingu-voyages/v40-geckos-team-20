import React from 'react';
import { useSelectedCocktailContext } from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import styled from 'styled-components/macro';

const TestContextSelectedCocktail = () => {
  const { selectedCocktail, updateSelectedCocktail, clearSelectedCocktail } =
    useSelectedCocktailContext();

  const { status, error, data } = selectedCocktail;
  const { LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;

  const clickHandlerUpdate = () => updateSelectedCocktail(11007);
  const clickHandlerClear = () => clearSelectedCocktail();

  return (
    <Wrapper>
      <h2>Test Cocktail Details</h2>
      <ApiButton onClick={clickHandlerUpdate}>Update Cocktail</ApiButton>
      <button onClick={clickHandlerClear}>Clear Cocktail</button>
      {status === LOADING && <p>Loading...</p>}
      {status === SUCCESS && data && (
        <>
          <p>id: {data.idDrink}</p>
          <p>name: {data.strDrink}</p>
        </>
      )}
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

export default TestContextSelectedCocktail;
