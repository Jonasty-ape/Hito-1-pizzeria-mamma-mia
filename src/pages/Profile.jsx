import React from 'react';

const Profile = () => {
  return (
    <div className="container my-5 text-center">
      <h2>Perfil de Usuario</h2>
      <p className="text-secondary mt-3">Correo: <strong>usuario@example.com</strong></p>
      <button className="btn btn-danger mt-2">Cerrar sesión</button>
    </div>
  );
};

export default Profile;
