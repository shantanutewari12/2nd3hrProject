import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <li>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Size: {item.size}</p>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default CartItem;