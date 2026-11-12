import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
              <div className="d-flex align-items-center">
                <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded me-3" />
                <h6 className="mb-0 text-capitalize fw-bold">{item.name}</h6>
              </div>
              <div className="d-flex align-items-center">
                <span className="fw-bold me-3">${(item.price * item.count).toLocaleString('es-CL')}</span>
                <button className="btn btn-outline-danger btn-sm px-2" onClick={() => decreaseCount(item.id)}>-</button>
                <span className="mx-3 fw-bold">{item.count}</span>
                <button className="btn btn-outline-primary btn-sm px-2" onClick={() => increaseCount(item.id)}>+</button>
              </div>
            </div>
          ))}
          <h3 className="fw-bold mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
          {}
          <button className="btn btn-dark mt-3 px-4 py-2" disabled={!token}>
            {token ? 'Pagar' : 'Inicia sesión para pagar'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

