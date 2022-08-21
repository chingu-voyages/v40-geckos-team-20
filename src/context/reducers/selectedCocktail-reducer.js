import { CONTEXT_STATUS, SELCOCKTAIL_ACTIONS } from '../constants';
import { SELECTED_COCKTAIL_INITIAL } from '../actions/selectedCocktail-actions';

const SelectedCocktailReducer = (cocktail, action) => {
  switch (action.type) {
    case SELCOCKTAIL_ACTIONS.UPDATE:
      const { drink } = action.payload;
      return {
        status: CONTEXT_STATUS.SUCCESS,
        data: drink,
        error: null,
      };
    case SELCOCKTAIL_ACTIONS.LOADING:
      return { ...cocktail, status: CONTEXT_STATUS.LOADING, error: null };
    case SELCOCKTAIL_ACTIONS.CLEAR:
      return { ...SELECTED_COCKTAIL_INITIAL };
    case SELCOCKTAIL_ACTIONS.ERROR:
      const { error } = action.payload;
      return { ...cocktail, status: CONTEXT_STATUS.ERROR, error };
    default:
      console.log(`Unknown Selected Cocktail action: ${action.type}`);
      return cocktail;
  }
};

export default SelectedCocktailReducer;
