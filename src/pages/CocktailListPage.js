import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';

const CocktailListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <SearchBar
        setCurrentPage={setCurrentPage}
      />
      <CocktailList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CocktailListPage;
