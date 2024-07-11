import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon({
          name: response.data.name,
          number: response.data.id,
          image: response.data.sprites.other["official-artwork"].front_default,
          type: response.data.types[0].type.name,
          abilities: response.data.abilities.map(
            (ability) => ability.ability.name
          ),
          stats: response.data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })),
        });
      } catch (err) {
        console.log("Error al pintar los detalles del Pokémon", err);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <section className="detailsPokemon">
      {pokemon ? (
        <>
          <h1>
            #{pokemon.number}: {capitalizeFirstLetter(pokemon.name)}
          </h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>Type: {pokemon.type}</p>
          <h2>Abilities</h2>
          <div className="abilities">
            {pokemon.abilities.map((ability) => (
              <p key={ability}>{ability}</p>
            ))}
          </div>
          <h2>Stats</h2>
          {pokemon.stats.map((stat) => (
            <p key={stat.name}>
              {stat.name}: {stat.value}
            </p>
          ))}
        </>
      ) : (
        <p>Pokémon not found</p>
      )}
    </section>
  );
};

export default Details;
