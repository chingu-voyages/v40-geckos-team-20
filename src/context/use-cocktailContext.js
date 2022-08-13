import { useContext } from 'react';
import CocktailListContextProvider, {
  CocktailListContext,
} from './actions/cocktailList-actions';

const GlobalContextProvider = ({ children }) => (
  <CocktailListContextProvider>{children}</CocktailListContextProvider>
);

const useCocktailContext = () => {
  const { cocktails, searchCocktails, getRandomCocktails, clearCocktails } =
    useContext(CocktailListContext);

  return {
    cocktails,
    searchCocktails,
    getRandomCocktails,
    clearCocktails,
  };
};

export { useCocktailContext, GlobalContextProvider };
