import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
        <div className="collapse navbar-collapse justify-content-between">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-light text-white me-2">🍕 Home</button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white me-2">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white me-2">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white me-2">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white me-2">🔐 Register</button>
                </li>
              </>
            )}
          </ul>
          <div>
            <button className="btn btn-outline-info text-info">
              🛒 Total: ${total.toLocaleString('es-CL')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
