import React, { useState } from 'react';
import { pizzaCart as initialCart } from '../pizzas';

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  // Aumentar cantidad de una pizza
  const aumentarCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Disminuir cantidad o eliminar si llega a 0
  const disminuirCantidad = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Calcular el total general
  const totalGeneral = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container col-md-6 my-5">
      <h3 className="mb-4">Detalles del pedido:</h3>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">Tu carrito está vacío</div>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} style={{ width: '70px', height: '50px', objectFit: 'cover' }} className="rounded me-3" />
              <span className="fw-bold text-capitalize">{pizza.name}</span>
            </div>
            
            <div className="d-flex align-items-center">
              <span className="me-4 text-success fw-semibold">${(pizza.price * pizza.count).toLocaleString('es-CL')}</span>
              <button className="btn btn-outline-danger btn-sm px-2 me-2" onClick={() => disminuirCantidad(pizza.id)}>-</button>
              <span className="mx-2 fw-bold">{pizza.count}</span>
              <button className="btn btn-outline-primary btn-sm px-2 ms-2" onClick={() => aumentarCantidad(pizza.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <h2 className="mt-4 fw-bold">Total: ${totalGeneral.toLocaleString('es-CL')}</h2>
      
      <button className="btn btn-dark w-100 mt-3 py-2" disabled={cart.length === 0}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
