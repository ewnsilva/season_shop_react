import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './pages/index/';
import Cart from './pages/cart/'
import {CartProvider} from './context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Index /> {/* Para ver a página Cart, colocar index em comentario e retirar Cart do comentario.*/}
      {/* <Cart /> */} {/* Comentado enquanto não foi configurado o mecanismo de rotas.*/}
    </CartProvider>
  </React.StrictMode>
);