import React, { useState } from "react";

const Search = ({ setPokemon }) => {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(value);
    setValue(e.target.value = "") 
  };

  return (
    <section className="topic">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          name="topic" 
          placeholder="Write a Pokemon..." 
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Search;
