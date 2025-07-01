import React from "react";
import style from "./Register.module.css";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";


function Register() {
  return (
    <section className={style.contenedor}>
      {/* Lateral izquierdo */}
      <div className={style.lateral}>
        <div className={style.recomendaciones}>
          <strong>RECOMENDACIONES</strong>
          <p>Para usar el buscador escribe palabras clave como: acción, miedo, +18, disney</p>
        </div>
        <button className={style.historial}>
          <FaHistory /> Ver Historial
        </button>
      </div>

      {/* Formulario de registro */}
      <div className={style.registerBox}>
        <h2>Registrate</h2>
        <form>
          <label>Nombre de Usuario</label>
          <input type="text" placeholder="Ingresa tu nombre usuario" />

          <label>Correo Electrónico</label>
          <input type="email" placeholder="Ingresa tu correo" />

          <label>Contraseña</label>
          <input type="password" placeholder="Ingresa tu contraseña" />

          <label>Confirmar Contraseña</label>
          <input type="password" placeholder="Confirmar tu contraseña" />

          <button type="submit">Registrarse</button>
        </form>

<p className={style.inicioSesion}>
  ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
</p>

      </div>
    </section>
  );
}

export default Register;
