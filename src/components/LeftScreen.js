import React from "react";

const LeftScreen = () => {
  return (
    <div class="left-screen">
      <div class="left-screen-top">
        <div class="led-container">
          <div class="led led--blue"></div>
        </div>
        <div class="led led--red"></div>
        <div class="led led--yellow"></div>
        <div class="led led--green"></div>
      </div>
      <div class="left-screen-bottom">
        <div class="main-screen">
          <div class="main-screen-top-leds"></div>
          <div id="display" class="main-display">
            <div class="pokemon-image">
              <img id="image" alt="" width="242.25" height="257.64" />
            </div>
          </div>
          <div class="main-screen-speaker-led"></div>
          <div class="main-screen-speaker">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="left-screen-hinge">
        <div class="hinge"></div>
        <div class="hinge"></div>
        <div class="hinge"></div>
        <div class="hinge"></div>
        <div class="hinge-reflex"></div>
      </div>
    </div>
  );
};

export default LeftScreen;
