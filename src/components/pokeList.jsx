import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PokeList() {
  useEffect(() => {
    pokeData();
  }, []);

  const [pokemons, setPokemons] = useState([]);

  const pokeData = async () => {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
    );
    const pokemons = await data.json();
    setPokemons(pokemons.results);
  };

  return (
    <div>
      {pokemons.map(item => (
        <h6 key={item.name}>
          <Link to={`/components/pokeList/${item.name}`}>{item.name}</Link>
        </h6>
      ))}
    </div>
  );
}

export default PokeList;
