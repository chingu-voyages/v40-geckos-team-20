import "./SearchBar.css";
import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar() {
  const [message, setMessage] = useState();

  return (
    <div className="SearchBar">
      <input
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Search for a cocktail..."
        id="search-bar"
      />
      <button disabled={!message} className="search-btn">
        Search
      </button>

      <div class="dropdown">
        <button class="btn" id="categories">
          Categories
        </button>
        <div class="dropdown-content">
          {" "}
          <a href="#" rel="noreferrer" target="_blank">
            Alcoholic
          </a>
          <a href="#" rel="noreferrer" target="_blank">
            Non-Alcholic
          </a>
        </div>
      </div>
    </div>
  );
}
