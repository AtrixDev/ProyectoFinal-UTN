import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminApp from './admin/AdminApp';
import ProductDetail from './components/ProductDetail'; // NUEVO
import './root.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminApp />} />
        <Route path="/products/:id" element={<ProductDetail />} /> {/* NUEVO */}

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
