import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import imgnapo from '../assets/napo.jpg';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error al cargar la pizza:', error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <div className="text-center my-5">Cargando información de la pizza...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img 
              src={pizza.img} 
              className="card-img-top" 
              alt={pizza.name} 
              style={{ height: '300px', objectFit: 'cover' }} 
              onError={(e) => { e.target.src = imgnapo; }}
            />
            <div className="card-body">
              <h3 className="card-title fw-bold text-capitalize">{pizza.name}</h3>
              <p className="text-muted">{pizza.desc}</p>
              <h5 className="fw-bold">Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ing, index) => (
                  <li key={index}>🍕 {ing}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h3 className="fw-bold mb-0">${pizza.price.toLocaleString('es-CL')}</h3>
                <button 
                  className="btn btn-dark" 
                  onClick={() => addToCart(pizza)}
                >
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
