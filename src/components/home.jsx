import React from "react";
import { Link } from "react-router-dom";
import logo from "../pokeball.png";

const Home = () => {
  return (
    <div className="card">
      <img
        src={logo}
        className="card-img-top"
        style={{ width: 100, margin: 20 }}
        alt="..."
      ></img>
      <div className="card-body">
        <h1 className="card-title">PokeApp</h1>
        <h4>Welcome</h4>
        <p className="card-text">Find pokemons and see their attributes.</p>
        <h5>Gotta Catch 'Em All!</h5>
        <Link to="/components/pokeList">
          <button className="btn btn-primary" style={{ margin: "20px" }}>
            Go!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
