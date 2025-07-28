import React, { useState, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import Login from './LoginAdmin';
import './AdminPanel.css';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (credentials) => {
    const { username, password } = credentials;
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return isAuthenticated ? (
    <AdminPanel onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}
