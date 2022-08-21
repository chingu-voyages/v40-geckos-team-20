import { CONTEXT_STATUS, FILTER_ACTIONS } from '../constants';

const FiltersReducer = (filters, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SET_ALLFILTERS:
      const { allFilters } = action.payload;
      return {
        ...filters,
        status: CONTEXT_STATUS.SUCCESS,
        allFilters,
        error: null,
      };
    case FILTER_ACTIONS.UPDATE_FILTERS:
      const { updatedFilters } = action.payload;
      // get acopy of the current selected filters, and overwrite them with updated filters.
      // if a filter is an empty array, the current will be replaced with that empty array (i.e. filters cleared)
      // if a filter was not passed in at all, the current will be kept (i.e. if filter is not supplied, keep the current values)
      const combined = { ...filters.selectedFilters, ...updatedFilters };
      // remove all empty filter arrays to ensure that filter is now not applied
      const selectedFilters = Object.fromEntries(
        Object.entries(combined).filter(([_, v]) => v?.length)
      );
      return { ...filters, selectedFilters };
    case FILTER_ACTIONS.LOADING:
      return { ...filters, status: CONTEXT_STATUS.LOADING, error: null };
    case FILTER_ACTIONS.CLEAR_SELECTED:
      return { ...filters, selectedFilters: null };
    case FILTER_ACTIONS.ERROR:
      const { error } = action.payload;
      return { ...filters, status: CONTEXT_STATUS.ERROR, error };
    default:
      console.log(`Unknown Cocktail List action: ${action.type}`);
      return filters;
  }
};

export default FiltersReducer;
