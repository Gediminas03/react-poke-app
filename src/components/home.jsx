import React, { Component } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="card">
      <img src="./logo.svg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h1 className="card-title">PokeApp</h1>
        <p className="card-text">
          <h4>Welcome</h4> Find pokemons and find out their attributes. Gotta
          Catch 'Em All!
        </p>
        <Link to="/components/pokeList">
          <button className="btn btn-primary">Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
