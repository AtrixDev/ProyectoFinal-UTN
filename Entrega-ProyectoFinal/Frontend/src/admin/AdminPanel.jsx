import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import './AdminPanel.css';

export default function AdminPanel({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getProducts().then(res => setProducts(res.data));
  };

  const handleCreate = (productData) => {
    createProduct(productData).then(() => fetchProducts());
  };

  const handleUpdate = (id, productData) => {
    updateProduct(id, productData).then(() => {
      setEditingProduct(null);
      fetchProducts();
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => fetchProducts());
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Panel de Administración</h1>
        <button onClick={onLogout}>Cerrar sesión</button>
      </div>
      <ProductForm
        onSubmit={editingProduct ? (data) => handleUpdate(editingProduct._id, data) : handleCreate}
        product={editingProduct}
        clearForm={() => setEditingProduct(null)}
      />
      <ProductTable
        products={products}
        onEdit={setEditingProduct}
        onDelete={handleDelete}
      />
    </div>
  );
}
