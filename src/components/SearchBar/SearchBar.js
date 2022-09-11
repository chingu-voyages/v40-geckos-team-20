import React, { useState } from 'react';
import {
  useCocktailListContext,
  useFiltersContext,
} from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import { Button } from '../UI/Button.styled';
import { SearchBarWrapper } from './SearchBar.styled';

const SearchBar = () => {
  const [message, setMessage] = useState('');
  const { cocktails, searchCocktails } = useCocktailListContext();
  const { clearSelectedFilters } = useFiltersContext();

  const { status } = cocktails;
  const { LOADING } = CONTEXT_STATUS;
  const disableSearch = !message || status === LOADING;

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (searchTerm) => {
    searchCocktails(searchTerm);
    clearSelectedFilters();
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && message !== '') handleSubmit(message);
  };

  return (
    <SearchBarWrapper>
      <input
        onChange={(event) => handleChange(event)}
        placeholder='Search for a cocktail...'
        onKeyDown={handleKeyPress}
        value={message}
      />
      <Button disabled={disableSearch} onClick={() => handleSubmit(message)}>
        Search
      </Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
