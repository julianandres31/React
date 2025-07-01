import React from "react";
import style from "./Inicio.module.css";
import { FiSend } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";

function Inicio() {
  return (
    <section className={style.contenedor}>
      <div className={style.lateral}>
        <div className={style.recomendaciones}>
          <strong>RECOMENDACIONES</strong>
          <p>
          Para usar el buscador escribe palabras clave como: acción, miedo, +18, disney
          </p>
        </div>
        <button className={style.historial}>
          <FaHistory /> ver Historial
        </button>
      </div>


      <div className={style.centro}>
        <h1>Entretainment.ia</h1>
        <p>Chat Español</p>
        <div className={style.buscador}>
          <input type="text" placeholder="Escribe aquí" />
          <button><FiSend /></button>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
