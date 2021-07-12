import React, { useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([
    {category: '---', type: '---', size: '---', weight: '---', evolution: '---', bio: '---'}
  ]);

  const seachPokemon = () => {
    return { name: 'pikachu'};
  }

  return 
}

export default Pokemon;