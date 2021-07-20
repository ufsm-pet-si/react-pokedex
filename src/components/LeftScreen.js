import React from "react";

const LeftScreen = (props) => {
  return (
    <div className="left-screen">
      <div className="left-screen-top">
        <div className="led-container">
          <div className="led led--blue"></div>
        </div>
        <div className="led led--red"></div>
        <div className="led led--yellow"></div>
        <div className="led led--green"></div>
      </div>
      <div className="left-screen-bottom">
        <div className="main-screen">
          <div className="main-screen-top-leds"></div>
          <div id="display" className="main-display">
            <div className="pokemon-image">
              <img id="image" alt="" width="242.25" height="257.64" src={`https://img.pokemondb.net/artwork/large/${props.pokemonName}.jpg`} />
            </div>
          </div>
          <div className="main-screen-speaker-led"></div>
          <div className="main-screen-speaker">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="left-screen-hinge">
        <div className="hinge"></div>
        <div className="hinge"></div>
        <div className="hinge"></div>
        <div className="hinge"></div>
        <div className="hinge-reflex"></div>
      </div>
    </div>
  );
};

export default LeftScreen;
