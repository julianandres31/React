import React, { useState, useEffect } from 'react';
import styles from './Formulario.module.css';
import { useLocation } from 'react-router-dom';

function Formulario() {
  const location = useLocation();
  const [plan, setPlan] = useState('');
  const [datos, setDatos] = useState({
    nombre: '',
    cedula: '',
    tarjeta: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setPlan(params.get('plan'));
  }, [location]);

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${datos.nombre}!\nHas comprado el plan ${plan}`);
  };

  return (
    <div className={styles.formulario}>
      <h2>Formulario de pago - {plan}</h2>
      <form onSubmit={manejarEnvio}>
        <label>Nombre completo:
          <input type="text" name="nombre" required onChange={manejarCambio} />
        </label>

        <label>Cédula:
          <input type="text" name="cedula" required onChange={manejarCambio} />
        </label>

        <label>Tarjeta :
          <input type="text" name="tarjeta" required maxLength="16" onChange={manejarCambio} />
        </label>

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}

export default Formulario;