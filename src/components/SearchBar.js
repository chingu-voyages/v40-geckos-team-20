import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Search for a cocktail..."
          id="search-bar"
        />

        <input type="button" value="Search" className="btn" />

        <div class="dropdown">
          <button class="btn">Categories</button>
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
      <div className="hint">
        suggested cocktails: cosmo, moscow mule, sazerac...
      </div>
    </section>
  );
}
