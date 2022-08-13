import { useContext } from 'react';
import CocktailListContextProvider, {
  CocktailListContext,
} from './actions/cocktailList-actions';
import SelectedCocktailContextProvider, {
  SelectedCocktailContext,
} from './actions/selectedCocktail-actions';

const GlobalContextProvider = ({ children }) => (
  <CocktailListContextProvider>
    <SelectedCocktailContextProvider>
      {children}
    </SelectedCocktailContextProvider>
  </CocktailListContextProvider>
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

const useSelectedCocktailContext = () => {
  const { selectedCocktail, updateSelectedCocktail, clearSelectedCocktail } =
    useContext(SelectedCocktailContext);

  return {
    selectedCocktail,
    updateSelectedCocktail,
    clearSelectedCocktail,
  };
};

export {
  useCocktailContext,
  useSelectedCocktailContext,
  GlobalContextProvider,
};
