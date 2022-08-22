import "./SearchBar.css";
import React, { useState } from "react";
import { useCocktailListContext } from "../context/use-context";

const SearchBar = () => {
  const [message, setMessage] = useState("");
  const { searchCocktails } = useCocktailListContext();
  const clickHandlerSearch = () => searchCocktails();

  const handleChange = (event, useCocktailListContext) => {
    setMessage(event.target.value);
    console.log(event.target.value);
    console.log(useCocktailListContext);
  };

  return (
    <div className="SearchBar">
      <input
        onChange={(event) => handleChange(event, useCocktailListContext)}
        placeholder="Search for a cocktail..."
        id="search-bar"
      />
      <button
        disabled={!message}
        className="search-btn"
        onClick={clickHandlerSearch}
      >
        Search
      </button>

      <div className="dropdown">
        <button className="btn" id="categories">
          Categories
        </button>
        <div className="dropdown-content">
          {" "}
          <div>Alcoholic</div>
          <div>Non-Alcholic</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
