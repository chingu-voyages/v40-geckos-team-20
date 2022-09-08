import './SearchBar.css';
import React, { useState } from 'react';
import { useCocktailListContext } from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import { Button } from '../UI/Button.styled';

const SearchBar = () => {
  const [message, setMessage] = useState('');
  const { cocktails, searchCocktails } = useCocktailListContext();

  const { status } = cocktails;
  const { LOADING } = CONTEXT_STATUS;
  const disableSearch = !message || status === LOADING;

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (searchTerm) => {
    searchCocktails(searchTerm);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(message);
    }
  };

  return (
    <div className='SearchBar'>
      <input
        onChange={(event) => handleChange(event)}
        placeholder='Search for a cocktail...'
        id='search-bar'
        onKeyDown={handleKeyPress}
        value={message}
        autoFocus
      />
      <Button
        disabled={disableSearch}
        className='search-btn'
        onClick={() => handleSubmit(message)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
