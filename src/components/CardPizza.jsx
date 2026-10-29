import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-capitalize">{name}</h5>
        <hr />
        <p className="card-text text-muted small mb-1">Ingredientes:</p>
        <ul className="list-unstyled mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-secondary small">🍕 {ingredient}</li>
          ))}
        </ul>
        <div className="mt-auto text-center">
          <h4 className="fw-bold mb-3">${price.toLocaleString('es-CL')}</h4>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
            <button className="btn btn-dark btn-sm">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
