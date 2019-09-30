import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <img src={pokemon.sprites.front_default} />
      <h1>{pokemon.name}</h1>
      <h1>Types</h1>
      {pokemon.types.map(type => (
        <p key={type.type.name}>{type.type.name}</p>
      ))}
      <h1>Moves</h1>
      {pokemon.moves.map(move => (
        <li key={move.move.name}>{move.move.name}</li>
      ))}
    </div>
  );
}

export default PokeInfo;
