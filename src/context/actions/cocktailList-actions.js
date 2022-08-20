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
      if (!selectedFilters && !cocktails.filtered) return;
      if (!selectedFilters) {
        cocktailListDispatcher({
          type: CTLIST_ACTIONS.UPDATE_LIST,
          payload: { drinks: allCocktails, filtered: false },
        });
        return;
      }

      const passArrayFilter = (testItem, itemArray) => {
        if (!itemArray) return true;
        return itemArray.includes(testItem);
      };

      const {
        categories = null,
        glasses = null,
        alcoholic = null,
      } = selectedFilters;

      const drinks = allCocktails?.filter(
        (d) =>
          passArrayFilter(d.strCategory, categories) &&
          passArrayFilter(d.strGlass, glasses) &&
          passArrayFilter(d.strAlcoholic, alcoholic)
      );

      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: { drinks, filtered: true },
      });
    },
    [allCocktails, cocktails.filtered]
  );

  // CLEAR COCKTAILS
  const clearCocktails = async () => {
    cocktailListDispatcher({
      type: CTLIST_ACTIONS.CLEAR_LIST,
    });
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
