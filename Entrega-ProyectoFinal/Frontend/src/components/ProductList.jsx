import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList({ onAddToCart, onBuyNow }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <section className="product-list">
            <h2>Productos</h2>
            <div className="grid">
                {products.map(p => (
                    <ProductCard
                        key={p._id}
                        product={p}
                        onAddToCart={onAddToCart}
                        onBuyNow={onBuyNow}
                    />
                ))}
            </div>
        </section>
    );
}
