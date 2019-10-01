import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <span>
        <Link to="/" style={{ margin: "10px" }}>
          Home
        </Link>
        <Link to="/components/pokeList" style={{ margin: "10px" }}>
          Pokémons
        </Link>
      </span>
    </nav>
  );
};

export default NavBar;
