import React from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';

const CocktailListPage = () => {
  return (
    <>
      <SearchBar />
      <CocktailList />
    </>
  );
};

export default CocktailListPage;
