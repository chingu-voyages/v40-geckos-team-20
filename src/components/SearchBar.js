import "./SearchBar.css";
import React, { useState } from "react";
import { useCocktailListContext } from "../context/use-context";
import { useFiltersContext } from "../context/use-context";
import { CONTEXT_STATUS } from "../context/constants";


const SearchBar = ( { setCurrentPage } ) => {
  const [message, setMessage] = useState('');

  const { cocktails, searchCocktails } = useCocktailListContext();
  const { updateFilters } = useFiltersContext();

  const { status } = cocktails;
  const { LOADING } = CONTEXT_STATUS;
  const disableSearch = !message || status === LOADING;
  const disableFilter = status === LOADING;

  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm);
    setCurrentPage(1);
    searchCocktails(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(message);
    }
  };

  const clickHandleUpdateFilter1 = () => {
    setCurrentPage(1);
    updateFilters({ alcoholic: ['Alcoholic'] });
  };

  const clickHandleUpdateFilter2 = () => {
    setCurrentPage(1);
    updateFilters({
      alcoholic: ["Non alcoholic"],
    });
  };

  return (
    <div className="SearchBar">
      <input
        onChange={(event) => handleChange(event)}
        placeholder="Search for a cocktail..."
        id="search-bar"
        onKeyDown={handleKeyPress}
      />
      <button
        disabled={disableSearch}
        className="search-btn"
        onClick={() => handleSubmit(message)}
      >
        Search
      </button>

      <div className={`dropdown${disableFilter ? " disabled" : ""}`}>
        <button className="btn" id="categories">
          Categories
        </button>
        <div className="dropdown-content">
          {" "}
          <div onClick={clickHandleUpdateFilter1}>Alcoholic</div>
          <div onClick={clickHandleUpdateFilter2}>Non-Alcholic</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
