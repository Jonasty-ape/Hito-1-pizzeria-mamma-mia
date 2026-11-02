import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="text-muted mb-4">La ruta que buscas no existe o fue movida.</p>
      <Link to="/" className="btn btn-dark">Volver al Inicio</Link>
    </div>
  );
};

export default NotFound;
