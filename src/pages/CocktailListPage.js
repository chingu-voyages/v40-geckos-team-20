import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';
import Filters from '../components/Filters/Filters';

const CocktailListPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <CocktailList />
    </>
  );
};

export default CocktailListPage;
