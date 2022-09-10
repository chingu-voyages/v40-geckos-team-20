import React, { useReducer, createContext, useCallback } from 'react';
import SelectedCocktailReducer from '../reducers/selectedCocktail-reducer';
import { CONTEXT_STATUS, SELCOCKTAIL_ACTIONS } from '../constants';
import { getCocktailDetails } from '../../api/cocktailApi';

export const SelectedCocktailContext = createContext();

export const SELECTED_COCKTAIL_INITIAL = {
  status: CONTEXT_STATUS.IDLE,
  data: null,
  error: null,
};

export default function SelectedCocktailContextProvider({ children }) {
  const [selectedCocktail, selectedCocktailDispatcher] = useReducer(
    SelectedCocktailReducer,
    SELECTED_COCKTAIL_INITIAL
  );

  // UPDATE SELECTED COCKTAIL
  const updateSelectedCocktail = useCallback(async (id) => {
    try {
      selectedCocktailDispatcher({
        type: SELCOCKTAIL_ACTIONS.LOADING,
      });
      const data = await getCocktailDetails(id);
      if (!data?.drinks || !data.drinks.length) throw new Error('not_found');
      selectedCocktailDispatcher({
        type: SELCOCKTAIL_ACTIONS.UPDATE,
        payload: { drink: data.drinks[0] },
      });
    } catch (error) {
      console.error(error);
      // The following error handling may not be the most elegant - consider refactoring later if we have time
      // Essentially (for now) we are just implementing a way to differientiate between an id not found (404) and an error in the API (400)
      selectedCocktailDispatcher({
        type: SELCOCKTAIL_ACTIONS.ERROR,
        payload: {
          error: {
            statusCode: error.message === 'not_found' ? 404 : 400,
            message:
              error.message === 'not_found'
                ? `No cocktail found with id: ${id}`
                : 'Error finding cocktail!  Please try again later. ',
            details: error,
          },
        },
      });
    }
  }, []);

  // CLEAR COCKTAIL
  const clearSelectedCocktail = useCallback(async () => {
    selectedCocktailDispatcher({
      type: SELCOCKTAIL_ACTIONS.CLEAR,
    });
  }, []);

  return (
    <SelectedCocktailContext.Provider
      value={{
        selectedCocktail,
        updateSelectedCocktail,
        clearSelectedCocktail,
      }}
    >
      {children}
    </SelectedCocktailContext.Provider>
  );
}
