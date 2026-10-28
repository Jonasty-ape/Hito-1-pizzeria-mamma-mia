import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError(true);
      setErrorMessage('Todos los campos son obligatorios.');
      setMensajeExito(false);
      return;
    }

    if (password.length < 6) {
      setError(true);
      setErrorMessage('Password must be at least 6 characters!');
      alert('Password must be at least 6 characters!');
      setMensajeExito(false);
      return;
    }

    setError(false);
    setMensajeExito(true);
    setErrorMessage('');
    alert('Authentication successful!');
  };

  return (
    <div className="container col-md-4 my-5">
      <h2 className="mb-4">Login</h2>

      {error && <div className="alert alert-danger">{errorMessage}</div>}
      {mensajeExito && <div className="alert alert-success">Authentication successful!</div>}

      <form onSubmit={handleLogin}>
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

        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
