import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Search for a cocktail..."
          id="search-bar"
        />

        <input type="button" value="Search" className="search-btn" />

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
      </form>
    </section>
  );
}
