import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../pokeball.png";

const Home = () => {
  return (
    <div className="card">
      <img
        src={logo}
        className="card-img-top"
        style={{ width: 100 }}
        alt="..."
      ></img>
      <div className="card-body">
        <h1 className="card-title">PokeApp</h1>
        <h4>Welcome</h4>
        <p className="card-text">
          Find pokemons and find out their attributes. Gotta Catch 'Em All!
        </p>
        <Link to="/components/pokeList">
          <button className="btn btn-primary">Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
