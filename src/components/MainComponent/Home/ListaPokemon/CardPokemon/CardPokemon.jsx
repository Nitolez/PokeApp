import React from 'react';
import { Link } from 'react-router-dom';
const CardPokemon = ({ pokemon }) => {

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="cardPokemon" id={pokemon.number}>
      <h3 className="numeroPokemon">#{pokemon.number}</h3>
      <div className="imagenPokemon"> 
        {pokemon.image ? 
        <img src={pokemon.image} alt={pokemon.name} /> 
        : <img src="src/assets/pokealternativa.gif" alt="Imagen no disponible" />}
      </div>
      <div className="nombrePokemon">
        <h4>
        <Link to={`/pokemon/${pokemon.name}`}>{capitalizeFirstLetter(pokemon.name)}</Link>
        </h4>
        <p className={pokemon.type}>{pokemon.type}</p>
      </div>
    </div>
  );
};

export default CardPokemon;
