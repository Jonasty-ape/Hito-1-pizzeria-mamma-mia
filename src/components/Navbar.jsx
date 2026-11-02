import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false; 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn btn-outline-light btn-sm me-2 mb-1" to="/">🍕 Home</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light btn-sm me-2 mb-1" to="/profile">🔓 Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm me-2 mb-1">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light btn-sm me-2 mb-1" to="/login">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light btn-sm me-2 mb-1" to="/register">🔐 Register</Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/cart" className="btn btn-outline-info btn-sm">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;