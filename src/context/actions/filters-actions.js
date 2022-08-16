import React, { useReducer, createContext } from 'react';
import FiltersReducer from '../reducers/fitlers-reducers';
import { CONTEXT_STATUS, FILTER_ACTIONS } from '../constants';

export const FiltersContext = createContext();

export const FILTERS_INITIAL = {
  status: CONTEXT_STATUS.IDLE,
  allFilters: null,
  selectedFilters: null,
  error: null,
};

export default function FiltersContextProvider({ children }) {
  const [filters, filtersDispatcher] = useReducer(
    FiltersReducer,
    FILTERS_INITIAL
  );

  // GET ALL FILTERS
  const getAllFilters = async () => {
    try {
      filtersDispatcher({
        type: FILTER_ACTIONS.LOADING,
      });
      // const data = await searchByName(searchTerm);
      // const drinks = data?.drinks ? data.drinks : [];
      const allFilters = {
        categories: ['c1', 'c2', 'c3'],
        glasses: ['g1', 'g2', 'g3'],
        alcoholic: ['a1', 'a2', 'a3'],
      };

      filtersDispatcher({
        type: FILTER_ACTIONS.SET_ALLFILTERS,
        payload: { allFilters },
      });
    } catch (error) {
      console.error('TODOLATER: HANDLE THIS ERROR!');
      console.error(error);
    }
  };

  // UPDATE FILTERS
  const updateFilters = async (filters) => {
    try {
      if (!filters)
        throw new Error(
          'addFilters function called with no filters passed in!'
        );
      if (typeof filters !== 'object')
        throw new Error('addFilters requires an object argument of filters!');

      const names = ['categories', 'glasses', 'alcoholic'];
      const mapped = Object.keys(filters)
        .filter((i) => names.includes(i))
        .map((i) => ({ [i]: filters[i] }));
      const selectedFilters = mapped.length ? Object.assign(...mapped) : {};

      filtersDispatcher({
        type: FILTER_ACTIONS.UPDATE_FILTERS,
        payload: { selectedFilters },
      });
    } catch (error) {
      console.error('HANDLE THIS ERROR!');
      console.error(error);
    }
  };

  // CLEAR ALL FILTERS
  const clearAllFilters = async () => {
    filtersDispatcher({
      type: FILTER_ACTIONS.CLEAR,
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        getAllFilters,
        updateFilters,
        clearAllFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
