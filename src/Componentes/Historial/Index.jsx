import React from "react";
import style from './Historial.module.css';

function Historial () {
    const HistorialFalso = [
        {
            Titulo: "Brayan sobando 2000 pipis",
            Sipnosis:"le gusta sobar pipis",
            Fecha:"2025-03-30",
        },
        {
            Titulo: "Brayan sobando 2000 pipis",
            Sipnosis:"le gusta sobar pipis",
            Fecha:"2025-03-30",
        },
        {
            Titulo: "Brayan sobando 2000 pipis",
            Sipnosis:"le gusta sobar pipis",
            Fecha:"2025-03-30",
        },
    ];
  return (
    <section className={style.historialSection}>
      <h2>Historial</h2>
      <div className={style.lista}>
        {historialFalso.map((item, index) => (
          <div className={style.item} key={index}>
            <div className={style.card}>
              <div className={style.col1}>
                <div className={style.imagen}></div>
                <div>
                  <h4>{item.titulo}</h4>
                  <p>{item.sinopsis}</p>
                </div>
              </div>
              <div className={style.col2}>
                <p>Fecha: {item.fecha}</p>
                <a href="#">➜ Ver más</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={style.btn}>Ver historial completo</button>
    </section>
  );
}

export default Historial;