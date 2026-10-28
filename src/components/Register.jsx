import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError(true);
      setErrorMessage('Todos los campos son obligatorios.');
      setMensajeExito(false);
      return;
    }

    if (password.length < 6) {
      setError(true);
      setErrorMessage('El password debe tener al menos 6 caracteres.');
      setMensajeExito(false);
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage('El password y la confirmación deben ser iguales.');
      setMensajeExito(false);
      return;
    }

    setError(false);
    setMensajeExito(true);
    alert('¡Registro exitoso!');
  };

  return (
    <div className="container col-md-4 my-5">
      <h2 className="mb-4">Register</h2>
      
      {error && <div className="alert alert-danger">{errorMessage}</div>}
      {mensajeExito && <div className="alert alert-success">¡Registro exitoso!</div>}

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">Submit</button>
      </form>
    </div>
  );
};

export default Register;
