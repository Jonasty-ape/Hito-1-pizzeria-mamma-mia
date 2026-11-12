import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [email, setEmail] = useState(localStorage.getItem('email') || null);

  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error al iniciar sesión');

      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error al registrarse');

      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error al obtener perfil');
      setEmail(data.email);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
