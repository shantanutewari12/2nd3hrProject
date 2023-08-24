import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import './Cart.css'
const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
