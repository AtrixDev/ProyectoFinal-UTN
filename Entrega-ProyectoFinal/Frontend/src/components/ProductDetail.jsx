import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error('Error al obtener el producto:', err);
        setProduct({ error: true });
      });
  }, [id]);

  if (!product) return <p>Cargando...</p>;
  if (product.error) return <p>Error al cargar el producto.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
}
