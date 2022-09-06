import React, { useReducer, createContext, useCallback } from 'react';
import FiltersReducer from '../reducers/filters-reducers';
import { CONTEXT_STATUS, FILTER_ACTIONS } from '../constants';
import {
  getFilterListOfAlcoholic,
  getFilterListOfCategories,
  getFilterListOfGlasses,
} from '../../api/cocktailApi';

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
  const getAllFilters = useCallback(async () => {
    try {
      filtersDispatcher({
        type: FILTER_ACTIONS.LOADING,
      });

      const cat_data = await getFilterListOfCategories();
      const alc_data = await getFilterListOfAlcoholic();
      const gl_data = await getFilterListOfGlasses();

      const allFilters = {
        categories: cat_data.drinks.map((f) => f.strCategory),
        glasses: gl_data.drinks.map((f) => f.strGlass),
        alcoholic: alc_data.drinks.map((f) => f.strAlcoholic),
      };

      filtersDispatcher({
        type: FILTER_ACTIONS.SET_ALLFILTERS,
        payload: { allFilters },
      });
    } catch (error) {
      filtersDispatcher({
        type: FILTER_ACTIONS.ERROR,
        payload: {
          error: {
            statusCode: 400,
            message: 'Error retreiving filter options!',
            details: error,
          },
        },
      });
    }
  }, []);

  // UPDATE FILTERS
  const updateFilters = (filters) => {
    if (!filters)
      throw new Error('addFilters function called with no filters passed in!');
    if (typeof filters !== 'object')
      throw new Error('addFilters requires an object argument of filters!');

    // these are our recognized filters
    const names = ['categories', 'glasses', 'alcoholic'];

    // if (and only if) a recognized filter is supplied, ensure it is an array
    for (const name of names) {
      if (filters.hasOwnProperty(name) && filters[name].constructor !== Array)
        throw new Error(
          `updateFilters received the property "${name}" as a non-array, it must be an array!`
        );
    }

    // extract only the recognized filters into a new object; discard others.
    // filter out the recognized keys, then rebuild the object again using map and Objct.assign
    const mapped = Object.keys(filters)
      .filter((i) => names.includes(i))
      .map((i) => ({ [i]: filters[i] }));
    // if there were no recognized objects, return an empty object
    const updatedFilters = mapped.length ? Object.assign(...mapped) : {};

    filtersDispatcher({
      type: FILTER_ACTIONS.UPDATE_FILTERS,
      payload: { updatedFilters },
    });
  };

  // CLEAR SELECTED FILTERS
  const clearSelectedFilters = async () => {
    filtersDispatcher({
      type: FILTER_ACTIONS.CLEAR_SELECTED,
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        getAllFilters,
        updateFilters,
        clearSelectedFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
