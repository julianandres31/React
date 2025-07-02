import React from 'react'
import styles from './Guia_uso.module.css'

function Guia_uso() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Guia De Uso Busqueda</h1>
      <section className={styles.section}>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Busqueda Simple</h2>
          <p className={styles.text}>Género: acción, comedia, drama, terror, ciencia ficción, romance, thriller, documental, animación, fantasía, crimen, musical, etc.</p>
            <p className={styles.text}>Año: año específico (2022) o rango (de 2010 a 2020)</p>
            <p className={styles.text}>País o idioma: EE.UU., Francia, Corea del Sur, Japón, idioma español, etc.</p>
            <p className={styles.text}>Duración: corta (90 min), media (90-120 min), larga (120 min)</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Busqueda Tematica</h2>
          <p className={styles.text}>Estado de ánimo: divertida, triste, inspiradora, romántica, reflexiva, oscura</p>
            <p className={styles.text}>Temas: viajes en el tiempo, apocalipsis, inteligencia artificial, crimen verdadero, amistad, redención, etc.</p>
            <p className={styles.text}>Ambientación: futurista, histórica, actual, medieval, cyberpunk, espacial
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Participacion</h2>
          <p className={styles.text}>Director o directora: Christopher Nolan, Greta Gerwig, Bong Joon-ho…
          Actor/Actriz: Leonardo DiCaprio, Zendaya, Keanu Reeves…
            Franquicia o saga: Marvel, Star Wars, Harry Potter…</p>
          
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Calidad</h2>
          <p className={styles.text}>
            Popularidad: más vistas, recomendadas por críticos, tendencia actual
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Ejemplos de Busqueda</h2>
          <p className={styles.text}>
            "Películas de ciencia ficción de los 90 con buena crítica"
            "Comedias románticas con menos de 100 minutos y en español"
            "Películas coreanas de crimen recomendadas por críticos"
            "Documentales históricos ganadores del Oscar"
          </p>
        </div>
      </section>
    </div>
  )
}

export default Guia_uso
