import React from 'react';
import { Navigate} from 'react-router-dom';
import '../styles/Inicio.css'; // Importar estilos CSS

const Inicio = () => {
  

  const handleLogout = async () => {
    try {
      // Realiza una solicitud al backend para cerrar sesión
      const response = await fetch('http://localhost:5000/logout', {
        method: 'GET',
        credentials: 'include',  // Asegura que se envían las cookies de sesión
      });
      if (response.ok) {
        // Redirige al usuario a la página de inicio de sesión
        Navigate('/login')
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="container">
      <h2>Bienvenido</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Inicio;
