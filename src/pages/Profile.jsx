import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { email, logout, getProfile, token } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <div className="container my-5 text-center" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Perfil de Usuario</h2>
      <p className="mb-4"><strong>Email:</strong> {email || 'Cargando...'}</p>
      <button className="btn btn-danger w-100" onClick={logout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
