import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total, setCart } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    setSuccessMessage('');
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error al procesar la compra');

      setSuccessMessage('¡Compra realizada con éxito! 🎉');
      setCart([]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Detalles del pedido:</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {cart.length === 0 && !successMessage ? (
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
          {cart.length > 0 && (
            <>
              <h3 className="fw-bold mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
              <button 
                className="btn btn-dark mt-3 px-4 py-2" 
                disabled={!token || loading} 
                onClick={handleCheckout}
              >
                {loading ? 'Procesando...' : token ? 'Pagar' : 'Inicia sesión para pagar'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

