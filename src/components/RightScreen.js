import React from "react";

const RightScreen = () => {
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
            />
            <button className="info-button" onclick="requestAPI()">
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
                - - -
              </div>
            </div>
            <div id="peso" className="info">
              <div className="label">Peso:</div>
              <div className="desc" id="info-text">
                - - -
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
