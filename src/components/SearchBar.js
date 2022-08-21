import "./SearchBar.css";
import React, { useState } from "react";

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
}
