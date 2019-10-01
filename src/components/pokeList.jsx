import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PokeList() {
  useEffect(() => {
    pokeData();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState("");

  const pokeData = async () => {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000"
    );
    const pokemons = await data.json();
    setPokemons(pokemons.results);
  };

  return (
    <div>
      <form>
        <input
          className="form-control"
          placeholder="Filter By Name"
          onChange={name => setName(name.target.value.toLowerCase())}
        />
      </form>
      {pokemons
        .filter(pokemon => pokemon.name.includes(`${name}`))
        .slice(0, 500)
        .map(pokemon => (
          <span
            key={pokemon.name}
            className="badge badge-light m-2"
            style={{ textTransform: "capitalize" }}
          >
            <Link to={`/components/pokeList/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </span>
        ))}
    </div>
  );
}

export default PokeList;
