import React from "react";
import Navigation from "./Navigation";


const Nav = ({search, setSearch }) => {
  return (
    <nav className="Nav">
      
        <form className="searchForm" onSubmit={(e) => e.preventDefault}>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
    
      <Navigation />
  
      
    </nav>
  );
};

export default Nav;
