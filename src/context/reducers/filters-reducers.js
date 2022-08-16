import { FILTERS_INITIAL } from '../actions/filters-actions';
import { CONTEXT_STATUS, FILTER_ACTIONS } from '../constants';

const FiltersReducer = (filters, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SET_ALLFILTERS:
      const { allFilters } = action.payload;
      return {
        ...filters,
        status: CONTEXT_STATUS.SUCCESS,
        allFilters,
      };
    case FILTER_ACTIONS.UPDATE_FILTERS:
      const { selectedFilters } = action.payload;
      return {
        ...filters,
        selectedFilters: { ...filters.selectedFilters, ...selectedFilters },
      };
    case FILTER_ACTIONS.LOADING:
      return { ...filters, status: CONTEXT_STATUS.LOADING };
    case FILTER_ACTIONS.CLEAR:
      return { ...FILTERS_INITIAL };
    default:
      console.log(`Unknown Cocktail List action: ${action.type}`);
      return filters;
  }
};

export default FiltersReducer;
