import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ cartItems, toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Tienda</h1>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={closeMenu}>Inicio</a></li>
        <li><a href="/" onClick={closeMenu}>Productos</a></li>
        <li><a href="/" onClick={closeMenu}>Contacto</a></li>
        <li><a href="/admin" onClick={closeMenu}>Login</a></li>
        <li>
          <a
            href="http://localhost:5000/public-api"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Documentación
          </a>
        </li>
        <li className="cart-icon" onClick={() => { toggleCart(); closeMenu(); }}>
          🛒 <span className="cart-count">{cartItems.length}</span>
        </li>
      </ul>
    </nav>
  );
}
