import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <span>
        <a style={{ margin: "10px" }}>
          <Link to="/">Home</Link>
        </a>
        <a a style={{ margin: "10px" }}>
          <Link to="/components/pokeList">Pokemons</Link>
        </a>
      </span>
    </nav>
  );
};

export default NavBar;
