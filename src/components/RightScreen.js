import React, { useState } from "react";
import Axios from 'axios';
// import Pokemon from "./Pokemon"

const RightScreen = () => {
  const [pokemonName, setPokemonName] = useState("pikachu");

  const [pokemon, setPokemon] = useState([
    { category: '---', type: ['---'], height: '---', weight: '---', evolution: '---', abilities: ['---'] }
  ]);

  const seachPokemon = async () => {
    const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    // type pode ter varias posições
    // abilities podem ter várias posições
    setPokemon({category: '---', type: ['---'], height: response.data.height, weight: response.data.weight, evolution: '---', abilities: [ '---' ]});

  }

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
              onChange={(event) => {
                setPokemonName(event.target.value)
              }}
            />
            <button className="info-button" onClick={seachPokemon}>
              Buscar
            </button>
          </div>
          <section className="info-screen">
            <div id="categoria" className="info">
              <div className="label">Categorias:</div>
              <div className="desc" id="info-text">
                - - -
              </div>
            </div>
            <div id="tipo" className="info">
              <div className="label">Tipo:</div>
              <div className="desc" id="info-text">
                - - -
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
                - - -
              </div>
            </div>
            <div id="bio" className="info">
              <div className="label">Habilidades:</div>
              <div className="desc" id="info-text">
                - - -
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
