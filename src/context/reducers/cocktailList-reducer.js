import { CTLIST_INITIAL } from '../actions/cocktailList-actions';
import { CONTEXT_STATUS, CTLIST_ACTIONS } from '../constants';

const CocktailListReducer = (cocktails, action) => {
  switch (action.type) {
    case CTLIST_ACTIONS.UPDATE_LIST:
      const { drinks, totalDrinks, searchTerm, filtered } = action.payload;
      return {
        status: CONTEXT_STATUS.SUCCESS,
        drinks,
        totalDrinks: totalDrinks ? totalDrinks : cocktails.totalDrinks,
        searchTerm: searchTerm ? searchTerm : cocktails.searchTerm,
        filtered,
        error: null,
      };
    case CTLIST_ACTIONS.LOADING:
      return { ...cocktails, status: CONTEXT_STATUS.LOADING, error: null };
    case CTLIST_ACTIONS.CLEAR_LIST:
      return { ...CTLIST_INITIAL };
    case CTLIST_ACTIONS.ERROR:
      const { error } = action.payload;
      return { ...cocktails, status: CONTEXT_STATUS.ERROR, error };
    default:
      console.error(`Unknown Cocktail List action: ${action.type}`);
      return cocktails;
  }
};

export default CocktailListReducer;
