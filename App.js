import React from 'react';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';
import { Alert, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>


      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

     
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

    </div>
  );
}

export default App;
