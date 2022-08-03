import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Index from './pages/index/';
import Cart from './pages/cart/'
import { CartProvider } from './context/CartContext'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);