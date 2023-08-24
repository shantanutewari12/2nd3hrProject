import React from 'react';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
