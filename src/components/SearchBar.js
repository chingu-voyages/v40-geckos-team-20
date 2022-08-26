import "./SearchBar.css";
import React, { useState } from "react";
import { useCocktailListContext } from "../context/use-context";
import { useFiltersContext } from "../context/use-context";

const SearchBar = () => {
  const [message, setMessage] = useState("");
  const { searchCocktails } = useCocktailListContext();
  const { updateFilters } = useFiltersContext();

  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm);
    searchCocktails(searchTerm);
  };

  const clickHandleUpdateFilter1 = () => {
    updateFilters({ alcoholic: ["Alcoholic"] });
  };

  const clickHandleUpdateFilter2 = () => {
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
      />
      <button
        disabled={!message}
        className="search-btn"
        onClick={() => handleSubmit(message)}
      >
        Search
      </button>

      <div className="dropdown">
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
