import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Formulario from "./Formulario";
import Details from "./Details";


const MainComponent = () => {

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Formulario />} />
        <Route path="/pokemon/:name" element={<Details />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>

    </main>
  );
};

export default MainComponent;