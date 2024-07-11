import React, { useState } from "react";
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div>
      <Search setPokemon={setPokemonName} />
      <ListaPokemon pokemonName={pokemonName} />
    </div>
  );
};

export default Home;
