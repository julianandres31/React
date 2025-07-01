import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Componentes/Nav";
import Footer from "./Componentes/Footer";
import Contacto from "./Componentes/Contacto";
import Nosotros from "./Componentes/Nosotros";

import Inicio from "./julian/Inicio";
import Login from "./julian/Login";
import Register from "./julian/Register";

function App() {
  return (
    <>
      <Nav />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
