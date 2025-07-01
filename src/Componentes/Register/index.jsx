import React from "react";
import style from "./Register.module.css";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";


function Register() {
  return (
    <section className={style.contenedor}>
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
