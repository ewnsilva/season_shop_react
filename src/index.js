import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/index/';
import Cart from './pages/cart/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Cart />
  </React.StrictMode>
);