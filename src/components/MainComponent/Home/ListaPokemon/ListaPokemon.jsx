import axios from "axios";
import { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import { DNA } from "react-loader-spinner";

const ListaPokemon = ({ pokemonName }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const getPokemonDetails = async (name) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const data = response.data;
      return {
        name: data.name,
        number: data.id,
        image: data.sprites.other.showdown.front_default,
        type: data.types[0].type.name,
      }
    } catch (e) {
      console.error("Error fetching Pokémon details:", e);
      return null;
    }
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (pokemonName) {
        const details = await getPokemonDetails(pokemonName);
        if (details !== null) {
          setPokemonDetails((prevDetails) => [details, ...prevDetails]);
        }
      }
    };
    fetchPokemonData();
  }, [pokemonName]);

  return (
    <section className="listaPokemon">
      {pokemonDetails.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      {pokemonDetails.map((pokemon) => (
        <CardPokemon pokemon={pokemon} key={pokemon.number} />
      ))}
      
    </section>
  );
};

export default ListaPokemon;
