import { CTLIST_INITIAL } from '../actions/cocktailList-actions';
import { CONTEXT_STATUS, CTLIST_ACTIONS } from '../constants';

const CocktailListReducer = (cocktails, action) => {
  switch (action.type) {
    case CTLIST_ACTIONS.UPDATE_LIST:
      const { drinks, searchTerm = null } = action.payload;
      return {
        ...cocktails,
        status: CONTEXT_STATUS.SUCCESS,
        drinks,
        searchTerm,
      };
    case CTLIST_ACTIONS.LOADING:
      return { ...cocktails, status: CONTEXT_STATUS.LOADING };
    case CTLIST_ACTIONS.CLEAR_LIST:
      return { ...CTLIST_INITIAL };
    default:
      console.log(`Unknown Cocktail List action: ${action.type}`);
      return cocktails;
  }
};

export default CocktailListReducer;
