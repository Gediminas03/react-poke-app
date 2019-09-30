import React from "react";
import { Link } from "react-router-dom";

// Stateless Functional Component

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/components/pokeList">
        <li>List</li>
      </Link>
      <Link to="/components/pokeInfo">
        <li>Info</li>
      </Link>
    </nav>
  );
};

export default NavBar;
