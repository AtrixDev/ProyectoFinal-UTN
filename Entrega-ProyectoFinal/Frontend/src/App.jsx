import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuyNow = (product) => {
    alert(`Gracias por comprar: ${product.name}`);
  };

  const handleRemoveFromCart = (productId) => {
    const index = cartItems.findIndex(item => item._id === productId);
    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />
      <Header />
      <ProductList onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
      {showCart && (
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={toggleCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
