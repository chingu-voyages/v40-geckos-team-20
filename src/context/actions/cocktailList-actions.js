import React, { useReducer, createContext, useState, useCallback } from 'react';
import {
  searchByName,
  searchByIngredient,
  getRandomCocktail,
  getCocktailDetails,
} from '../../api/cocktailApi';
import CocktailListReducer from '../reducers/cocktailList-reducer';
import { CONTEXT_STATUS, CTLIST_ACTIONS } from '../constants';

export const CocktailListContext = createContext();

export const CTLIST_INITIAL = {
  status: CONTEXT_STATUS.IDLE,
  drinks: null,
  totalDrinks: null,
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
  const [currentListPage, setCurrentListPage] = useState(1);

  // SEARCH COCKTAILS
  const searchCocktails = async (searchTerm) => {
    try {
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.LOADING,
      });

      setCurrentListPage(1);

      // search for cocktails by cocktail name
      const data_name = await searchByName(searchTerm);
      const drinks_name = data_name?.drinks ? data_name.drinks : [];

      // search for cocktails by ingredient
      const data_ingr = await searchByIngredient(searchTerm);
      const drinks_ingr_initial = data_ingr?.drinks ? data_ingr.drinks : [];

      // remove duplicates
      const ids = new Set(drinks_name.map((d) => d.idDrink));
      const drinks_ingr_shallow = drinks_ingr_initial.filter(
        (d) => !ids.has(d.idDrink)
      );

      // fill out details for drinks from ingredients search
      const promises = drinks_ingr_shallow.map(async (d) => {
        const data = await getCocktailDetails(+d.idDrink);
        if (!data?.drinks || !data.drinks.length) throw new Error('not_found');
        return data.drinks[0];
      });
      const drinks_ingr_full = await Promise.all(promises);

      // combine results
      const drinks = [...drinks_name, ...drinks_ingr_full];

      setAllCocktails(drinks);
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: {
          drinks,
          totalDrinks: drinks.length,
          searchTerm,
          filtered: false,
        },
      });
    } catch (error) {
      console.error(error);
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.ERROR,
        payload: {
          error: {
            statusCode: 400,
            message: 'Error performing search!  Please try again later.',
            details: error,
          },
        },
      });
    }
  };

  // GET RANDOM COCKTAILS
  const getRandomCocktails = useCallback(async (amount) => {
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

      setCurrentListPage(1);

      const promises = [...Array(amount)].map(async () => {
        const data = await getRandomCocktail();
        return data.drinks[0];
      });
      const drinks = await Promise.all(promises);

      setAllCocktails(drinks);

      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: { drinks, totalDrinks: drinks.length, filtered: false },
      });
    } catch (error) {
      console.error(error);
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.ERROR,
        payload: {
          error: {
            statusCode: 400,
            message:
              'Error retreiving random cocktails! Please try again later.',
            details: error,
          },
        },
      });
    }
  }, []);

  // FILTER COCKTAILS
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

      setCurrentListPage(1);

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
    setCurrentListPage(1);
  };

  return (
    <CocktailListContext.Provider
      value={{
        cocktails,
        searchCocktails,
        getRandomCocktails,
        filterCocktails,
        clearCocktails,
        currentListPage,
        setCurrentListPage,
      }}
    >
      {children}
    </CocktailListContext.Provider>
  );
}
