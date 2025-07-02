import React from "react";
import estilos from "./Busqueda.module.css";

const TarjetaPelicula = ({ titulo, sinopsis, año, genero, puntuacion }) => {
  return (
    <div className={estilos.tarjeta}>
      <div className={estilos.imagen}></div>
      <div className={estilos.detalles}>
        <h3>{titulo}</h3>
        <p className={estilos.sinopsis}>{sinopsis}</p>
      </div>
      <div className={estilos.info}>
        <p><strong>Año:</strong> {año}</p>
        <p><strong>Género:</strong> {genero}</p>
        <p><strong>Puntuación:</strong> {puntuacion}</p>
        <a href="#" className={estilos.enlace}>--- Ver más ---</a>
      </div>
    </div>
  );
};

const Busqueda = () => {
  const peliculas = [
    { titulo: "titulo", sinopsis: "sinopsis", año: "Año", genero: "Género", puntuacion: "Puntuación" },
    { titulo: "titulo", sinopsis: "sinopsis", año: "Año", genero: "Género", puntuacion: "Puntuación" },
    { titulo: "titulo", sinopsis: "sinopsis", año: "Año", genero: "Género", puntuacion: "Puntuación" },
  ];

  return (
    <div className={estilos.contenedor}>
      <h2 className={estilos.encabezado}>Miedo con payasos</h2>
      {peliculas.map((pelicula, i) => (
        <TarjetaPelicula key={i} {...pelicula} />
      ))}
    </div>
  );
};

export default Busqueda;
