import { Link } from 'react-router-dom';
import './ProductCard.css';


export default function ProductCard({ product, onAddToCart, onBuyNow }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
      <div className="product-buttons">
        <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
        <button onClick={() => onBuyNow(product)}>Comprar</button>
      </div>
    </div>
  );
}
