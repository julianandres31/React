import React from "react";
import style from "./Login.module.css";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";


function Login() {
  return (
    <section className={style.contenedor}>
      {/* Lateral izquierdo (igual que en inicio) */}
      <div className={style.lateral}>
        <div className={style.recomendaciones}>
          <strong>RECOMENDACIONES</strong>
          <p>Para usar el buscador escribe palabras clave como: acción, miedo, +18, disney</p>
        </div>
        <button className={style.historial}>
          <FaHistory /> Ver Historial
        </button>
      </div>

      {/* Formulario de login */}
      <div className={style.loginBox}>
        <h2>Iniciar Sesión</h2>
        <form>
          <label>Nombre de Usuario</label>
          <input type="text" placeholder="Ingresa tu nombre de usuario" />

          <label>Contraseña</label>
          <input type="password" placeholder="Ingresa tu contraseña" />

          <button type="submit">Iniciar Sesión</button>
        </form>
<p className={style.registro}>
  ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
</p>

      </div>
    </section>
  );
}

export default Login;
