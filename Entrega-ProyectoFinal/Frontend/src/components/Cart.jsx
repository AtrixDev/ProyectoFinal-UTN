import React from 'react';
import './Cart.css';

export default function Cart({ cartItems, onRemoveFromCart, onClose }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-overlay">
      <button className="cart-close-btn" onClick={onClose}>✖</button>
      <div className="cart-panel">
        <h2>🛒 Carrito</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <span>{item.name} - ${item.price}</span>
                  <button onClick={() => onRemoveFromCart(item._id)}>Quitar</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">Total: ${total.toFixed(2)}</div>
          </>
        )}
      </div>
    </div>
  );
}
