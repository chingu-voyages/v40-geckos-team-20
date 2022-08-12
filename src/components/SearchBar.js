import React from "react";

export const SearchBar = () => {
  return (
    <section>
      <form>
        <input type="text" placeholder="Search.." />

        <input type="button" value="search" />
      </form>
      <div className="hint">
        suggested cocktails: cosmo, moscow mule, sazerac...
      </div>
    </section>
  );
};
