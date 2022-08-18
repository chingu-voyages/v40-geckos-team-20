import React, { useReducer, createContext, useState, useCallback } from 'react';
import { searchByName, getRandomCocktail } from '../../api/cocktailApi';
import CocktailListReducer from '../reducers/cocktailList-reducer';
import { CONTEXT_STATUS, CTLIST_ACTIONS } from '../constants';

export const CocktailListContext = createContext();

export const CTLIST_INITIAL = {
  status: CONTEXT_STATUS.IDLE,
  drinks: null,
  filtered: null,
  searchTerm: null,
  error: null,
};

export default function CocktailListContextProvider({ children }) {
  const [cocktails, cocktailListDispatcher] = useReducer(
    CocktailListReducer,
    CTLIST_INITIAL
  );
  const [allCocktails, setAllCocktails] = useState(null);

  // SEARCH COCKTAILS
  const searchCocktails = async (searchTerm) => {
    try {
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.LOADING,
      });
      const data = await searchByName(searchTerm);
      const drinks = data?.drinks ? data.drinks : [];

      /**
       *  update allCocktails -> setAllCocktails
       */
      setAllCocktails(drinks);

      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: { drinks, searchTerm, filtered: false },
      });
    } catch (error) {
      console.error('TODOLATER: HANDLE THIS ERROR!');
      console.error(error);
    }
  };

  // GET RANDOM COCKTAILS
  const getRandomCocktails = async (amount) => {
    try {
      if (!amount)
        throw new Error(
          'getRandomCocktails function called with no amount value!'
        );
      if (typeof amount !== 'number')
        throw new Error(
          'getRandomCocktails requires amount parameter of type number!'
        );
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.LOADING,
      });
      const promises = [...Array(amount)].map(async () => {
        const data = await getRandomCocktail();
        return data.drinks[0];
      });
      const drinks = await Promise.all(promises);
      /**
       *  update allCocktails -> setAllCocktails
       */
      setAllCocktails(drinks);

      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: { drinks, filtered: false },
      });
    } catch (error) {
      console.error('HANDLE THIS ERROR!');
      console.error(error);
    }
  };

  const filterCocktails = useCallback(
    (selectedFilters) => {
      console.log('In filtering function, checking if we need to filter...');
      console.log(selectedFilters);
      console.log(cocktails.filtered);
      if (!selectedFilters && !cocktails.filtered) {
        console.log('Nope do not need to filter');
        return;
      }
      console.log('In filtering function, filtering cocktails...');
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: selectedFilters
          ? { drinks: [1, 2, 3, 4], filtered: true }
          : { drinks: allCocktails, filtered: false },
      });
    },
    [allCocktails, cocktails.filtered]
  );

  // CLEAR COCKTAILS
  const clearCocktails = async () => {
    cocktailListDispatcher({
      type: CTLIST_ACTIONS.CLEAR_LIST,
    });
    /**
     *  clear allCocktails -> setAllCocktails
     */
    setAllCocktails(null);
  };

  return (
    <CocktailListContext.Provider
      value={{
        cocktails,
        searchCocktails,
        getRandomCocktails,
        filterCocktails,
        clearCocktails,
      }}
    >
      {children}
    </CocktailListContext.Provider>
  );
}
