import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <header className="header">
      <nav className="headerMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <nav className="headerSearch">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            onClick={openSearch}
            className="headerSearchIcon"
            src={require("../../assets/icons/search.png")}
            alt="Search"
          />
        </form>
      </nav>
    </header>
  );
};

export default Header;
