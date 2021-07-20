import React, { useState } from "react";
import Axios from 'axios';

const RightScreen = (props) => {
  const [pokemon, setPokemon] = useState([
    { category: '---', type: ['---'], height: '---', weight: '---', evolution: '---', abilities: ['---'] }
  ]);

  const searchPokemon = async () => {
    const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`);

    const arrAbilities = response.data.abilities.map((curr) => {
      return `${curr.ability.name.replace('-', ' ')}\n`;
    });

    const arrTypes = response.data.types.map((curr) => {
      return `${curr.type.name}\n`;
    });

    const pokemonSpecies = await requestPokemonSpecies();

    const arrCategory = searchCatogory(pokemonSpecies);

    const arrEvolution = await requestEvolution(pokemonSpecies.evolution_chain.url);

    setPokemon({category: arrCategory, type: arrTypes, height: response.data.height, weight: response.data.weight, evolution: arrEvolution, abilities: arrAbilities});
  }

  const searchCatogory = (pokemonSpecies) => {
    try {
      const arrCategory = pokemonSpecies.egg_groups.map((curr) => {
        return `${curr.name}\n`;
      })
      return arrCategory;
    } catch (error) {
      console.log(error);
    }
  }

  const requestPokemonSpecies = async () => {
    try {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${props.pokemonName}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const requestEvolution = async (url) => {
    try {
      const response = await Axios.get(url);

      let arrEvolution = [`${response.data.chain.species.name}\n`];

      if(response.data.chain.evolves_to.length > 1){
        arrEvolution.push(
          response.data.chain.evolves_to.map((curr) => {
          return `${curr.species.name}\n`;
        }));
      }else {
        for(let secondEvolution of response.data.chain.evolves_to){
          arrEvolution.push(`${secondEvolution.species.name}\n`);
          for(let thirdEvoluton of secondEvolution.evolves_to){
            arrEvolution.push(`${thirdEvoluton.species.name}\n`);
          }
        }
      }
      return arrEvolution;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="right-screen">
      <div className="right-screen-top">
        <div></div>
      </div>
      <div className="right-screen-bottom">
        <div className="info-container">
          <div>
            <input
              id="search"
              type="text"
              className="info-input"
              placeholder="Busque um pokemon"
              defaultValue="pikachu"
              onChange={(event) =>
                props.onChangePokemonName(event)
              }
            />
            <button className="info-button" onClick={searchPokemon}>
              Buscar
            </button>
          </div>
          <section className="info-screen">
            <div id="categoria" className="info">
              <div className="label">Categorias:</div>
              <div className="desc" id="info-text">
                { pokemon.category }
              </div>
            </div>
            <div id="tipo" className="info">
              <div className="label">Tipo:</div>
              <div className="desc" id="info-text">
                { pokemon.type }
              </div>
            </div>
            <div id="tamanho" className="info">
              <div className="label">Tamanho:</div>
              <div className="desc" id="info-text">
                {pokemon.height}
              </div>
            </div>
            <div id="peso" className="info">
              <div className="label">Peso:</div>
              <div className="desc" id="info-text">
              {pokemon.weight}
              </div>
            </div>
            <div id="evolution" className="info">
              <div className="label">Evoluções:</div>
              <div className="desc" id="info-text">
              {pokemon.evolution}
              </div>
            </div>
            <div id="bio" className="info">
              <div className="label">Habilidades:</div>
              <div className="desc" id="info-text">
                { pokemon.abilities }
              </div>
            </div>
            <div id="not-found">
              <b>Pokemon não encontrado!!!</b>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RightScreen;
