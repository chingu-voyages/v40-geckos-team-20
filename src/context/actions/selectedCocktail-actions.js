import React, { useReducer, createContext } from 'react';
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
  const updateSelectedCocktail = async (id) => {
    try {
      selectedCocktailDispatcher({
        type: SELCOCKTAIL_ACTIONS.LOADING,
      });
      const data = await getCocktailDetails(id);
      if (!data?.drinks || !data.drinks.length)
        throw new Error(`No cocktail found with id: ${id}`);
      selectedCocktailDispatcher({
        type: SELCOCKTAIL_ACTIONS.UPDATE,
        payload: { drink: data.drinks[0] },
      });
    } catch (error) {
      console.error('HANDLE THIS ERROR!');
      console.error(error);
    }
  };

  // CLEAR COCKTAIL
  const clearSelectedCocktail = async () => {
    selectedCocktailDispatcher({
      type: SELCOCKTAIL_ACTIONS.CLEAR,
    });
  };

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
