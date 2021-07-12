import React from "react";

const RightScreen = () => {
  return (
    <div class="right-screen">
      <div class="right-screen-top">
        <div></div>
      </div>
      <div class="right-screen-bottom">
        <div class="info-container">
          <div>
            <input
              id="search"
              type="text"
              class="info-input"
              placeholder="Busque um pokemon"
              value="pikachu"
            />
            <button class="info-button" onclick="requestAPI()">
              Buscar
            </button>
          </div>
          <section class="info-screen">
            <div id="categoria" class="info">
              <div class="label">Categorias:</div>
              <div class="desc" id="info-text">
                - - -
              </div>
            </div>
            <div id="tipo" class="info">
              <div class="label">Tipo:</div>
              <div class="desc" id="info-text">
                - - -
              </div>
            </div>
            <div id="tamanho" class="info">
              <div class="label">Tamanho:</div>
              <div class="desc" id="info-text">
                - - -
              </div>
            </div>
            <div id="peso" class="info">
              <div class="label">Peso:</div>
              <div class="desc" id="info-text">
                - - -
              </div>
            </div>
            <div id="evolution" class="info">
              <div class="label">Evoluções:</div>
              <div class="desc" id="info-text">
                - - -
              </div>
            </div>
            <div id="bio" class="info">
              <div class="label">Habilidades:</div>
              <div class="desc" id="info-text">
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
