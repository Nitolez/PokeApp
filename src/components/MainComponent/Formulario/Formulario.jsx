import React from "react";

const Formulario = () => {
  

  return <section className="formNewPoke">
    <h1>Add your Pokémon!</h1>
    <div className="formDiv">
    <form>
      <label>Number:</label>
      <input type="text"/>

      <label>Name:</label>
      <input type="text" />

      <label>Image:</label>
      <input type="text" />

      <label>Type 1:</label>
      <input type="text" />

      <label>Type 2:</label>
      <input type="text" />

    </form>
    </div>
    <button type="submit">Add</button>
    <button type="reset">Clean</button>
  </section>;
};

export default Formulario;
