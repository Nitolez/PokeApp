import React from "react";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav">
          <Nav />
        </div>
        <div className="logo">
          <img src="../../src/assets/valor.png" alt="Icono Pokémon" />
          <h1>Pokedex</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
