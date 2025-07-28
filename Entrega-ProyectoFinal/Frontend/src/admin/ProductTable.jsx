// src/admin/ProductTable.jsx
import React from 'react';
import './ProductTable.css';

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p._id}>
            <td><img src={p.image} alt={p.name} width="50" /></td>
            <td>{p.name}</td>
            <td>{p.description}</td>
            <td>${p.price}</td>
            <td>
              <button onClick={() => onEdit(p)}>✎</button>
              <button onClick={() => onDelete(p._id)}>🗑️ </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
