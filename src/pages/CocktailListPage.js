import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';
import Filters from '../components/Filters/Filters';

const CocktailListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <SearchBar setCurrentPage={setCurrentPage} />
      <Filters />
      <CocktailList currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default CocktailListPage;
