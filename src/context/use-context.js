import { useContext } from 'react';
import CocktailListContextProvider, {
  CocktailListContext,
} from './actions/cocktailList-actions';
import SelectedCocktailContextProvider, {
  SelectedCocktailContext,
} from './actions/selectedCocktail-actions';
import FiltersContextProvider, {
  FiltersContext,
} from './actions/filters-actions';

const GlobalContextProvider = ({ children }) => (
  <CocktailListContextProvider>
    <SelectedCocktailContextProvider>
      <FiltersContextProvider>{children}</FiltersContextProvider>
    </SelectedCocktailContextProvider>
  </CocktailListContextProvider>
);

const useCocktailListContext = () => {
  const {
    cocktails,
    searchCocktails,
    getRandomCocktails,
    filterCocktails,
    clearCocktails,
    currentListPage,
    setCurrentListPage,
  } = useContext(CocktailListContext);

  return {
    cocktails,
    searchCocktails,
    getRandomCocktails,
    filterCocktails,
    clearCocktails,
    currentListPage,
    setCurrentListPage,
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

const useFiltersContext = () => {
  const { filters, getAllFilters, updateFilters, clearSelectedFilters } =
    useContext(FiltersContext);

  return {
    filters,
    getAllFilters,
    updateFilters,
    clearSelectedFilters,
  };
};

export {
  useCocktailListContext,
  useSelectedCocktailContext,
  useFiltersContext,
  GlobalContextProvider,
};
