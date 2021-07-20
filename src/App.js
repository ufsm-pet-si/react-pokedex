import React, { useState } from "react";
import LeftScreen from "./components/LeftScreen";
import RightScreen from "./components/RightScreen";

function App() {
  const [ pokemonName, setPokemonName ] = useState("pikachu");

  const onChangePokemonName = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  }

  return (
    <div className="container">
      <LeftScreen pokemonName={pokemonName}/>
      <RightScreen pokemonName={pokemonName} onChangePokemonName={onChangePokemonName}/>
    </div>
  );
}

export default App;
