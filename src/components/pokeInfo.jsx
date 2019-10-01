import React, { useState, useEffect } from "react";

function PokeInfo({ match }) {
  useEffect(() => {
    pokeData();
  }, []);

  const [pokemon, setPokemon] = useState({
    sprites: {},
    types: [],
    moves: []
  });

  const pokeData = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
    );
    const pokemon = await data.json();
    setPokemon(pokemon);
  };

  return (
    <div>
      <span style={{ margin: "20px" }}>
        <h1 style={{ textTransform: "capitalize" }}>
          {" "}
          <img src={pokemon.sprites.front_default} /> {pokemon.name}
        </h1>
      </span>
      <h4 style={{ margin: "20px" }}>Types</h4>
      <span className="badge badge-light" style={{ textAlign: "left" }}>
        {pokemon.types.map(type => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </span>
      <h4 style={{ margin: "20px" }}>Moves</h4>
      <span className="badge badge-light" style={{ textAlign: "left" }}>
        {pokemon.moves.map(move => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </span>
    </div>
  );
}

export default PokeInfo;
