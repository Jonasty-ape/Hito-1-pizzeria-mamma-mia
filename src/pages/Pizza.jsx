import React, { useState, useEffect } from 'react';
import imgnapo from '../assets/napo.jpg';

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  const consultarPizza = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al cargar la pizza:', error);
    }
  };

  useEffect(() => {
    consultarPizza();
  }, []);

  return (
    <div className="container my-5">
      <div className="card mb-3 mx-auto shadow-sm" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-md-6 d-flex">
           <img 
              src={pizza.img} 
              alt={pizza.name} 
              className="img-fluid rounded-start w-100" 
              style={{ objectFit: 'cover', minHeight: '350px' }}
              onError={(e) => { e.target.src = imgnapo; }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column">
            <div className="card-body d-flex flex-column">
              <h2 className="card-title fw-bold text-capitalize">{pizza.name}</h2>
              <hr />
              <p className="card-text text-secondary">{pizza.desc}</p>
              
              <h5 className="mt-3 text-muted">Ingredientes:</h5>
              <ul className="list-unstyled mb-4">
                {pizza.ingredients && pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-secondary">🍕 {ingredient}</li>
                ))}
              </ul>

              <div className="mt-auto d-flex align-items-center justify-content-between">
                <h3 className="fw-bold mb-0">${pizza.price?.toLocaleString('es-CL')}</h3>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
