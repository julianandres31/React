import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Componentes/Nav";
import Footer from "./Componentes/Footer";
import Contacto from "./Paginas/P_Contactanos";
import Nosotros from "./Paginas/P_Nosotros";

import Inicio from "./Paginas/P_Inicio";
import Login from "./Paginas/P_Login";
import Register from "./Paginas/P_Register";
import Busqueda from "./Paginas/B_Buscar";

function App() {
  return (
    <>
    <div className="appContainer">
      <Nav />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/peliculas" element={<Busqueda />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;

