import React, { useReducer, createContext } from 'react';
import { searchByName, getRandomCocktail } from '../../api/cocktailApi';
import CocktailListReducer from '../reducers/cocktailList-reducer';
import { CONTEXT_STATUS, CTLIST_ACTIONS } from '../constants';

export const CocktailListContext = createContext();

export const CTLIST_INITIAL = {
  status: CONTEXT_STATUS.IDLE,
  drinks: null,
  searchTerm: null,
  error: null,
};

export default function CocktailListContextProvider({ children }) {
  const [cocktails, cocktailListDispatcher] = useReducer(
    CocktailListReducer,
    CTLIST_INITIAL
  );
  /**
   * const [allCocktails, setAllCocktails] = useState(null)
   */

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

      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: { drinks, searchTerm },
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
      cocktailListDispatcher({
        type: CTLIST_ACTIONS.UPDATE_LIST,
        payload: { drinks },
      });
    } catch (error) {
      console.error('HANDLE THIS ERROR!');
      console.error(error);
    }
  };

  // CLEAR COCKTAILS
  const clearCocktails = async () => {
    cocktailListDispatcher({
      type: CTLIST_ACTIONS.CLEAR_LIST,
    });
    /**
     *  clear allCocktails -> setAllCocktails
     */
  };

  return (
    <CocktailListContext.Provider
      value={{
        cocktails,
        searchCocktails,
        getRandomCocktails,
        clearCocktails,
      }}
    >
      {children}
    </CocktailListContext.Provider>
  );
}
