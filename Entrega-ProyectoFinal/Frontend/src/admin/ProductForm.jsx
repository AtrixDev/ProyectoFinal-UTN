// src/admin/ProductForm.jsx
import React, { useState, useEffect } from 'react';
import './ProductForm.css';

export default function ProductForm({ onSubmit, product, clearForm }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({ name: '', description: '', price: '', image: '' });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', price: '', image: '' });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" required />
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Precio" required />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="URL de imagen" required />
      <button type="submit">{product ? 'Actualizar' : 'Crear'}</button>
      {product && <button type="button" onClick={clearForm}>Cancelar</button>}
    </form>
  );
}
