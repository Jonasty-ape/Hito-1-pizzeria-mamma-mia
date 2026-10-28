
import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fs-4">Pizza {name}</h5>
        <hr />
        <p className="card-text text-muted mb-1 text-center small">Ingredientes:</p>
        <ul className="list-unstyled text-center mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="d-inline text-secondary small">
              🍕 {ingredient}{index < ingredients.length - 1 ? ', ' : ''}
            </li>
          ))}
        </ul>
        <hr className="mt-auto" />
        <div className="text-center mb-3">
          <span className="fw-bold fs-5">Precio: ${price.toLocaleString('es-CL')}</span>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
