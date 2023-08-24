// Product.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Product.css';

const Product = ({ product, setProductsArray }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!product.name || !product.description || !product.size) {
      alert('Please fill in all fields before adding to cart.');
      return;
    }

    const productToAdd = {
      id: product.id,
      name: product.name,
      description: product.description,
      size: product.size,
    };

    addToCart(productToAdd);

    // Clear the input fields after adding to the cart
    setProductsArray((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id
          ? { ...prevProduct, name: '', description: '' }
          : prevProduct
      )
    );
  };

  return (
    <div>
      <h1 className="header">Shopping App</h1>
      <div className="product">
        <div className="row">
          <label>T-shirt Name:</label>
          <input
            type="text"
            placeholder="Enter T-shirt Name"
            value={product.name}
            onChange={(e) =>
              setProductsArray((prevProducts) =>
                prevProducts.map((prevProduct) =>
                  prevProduct.id === product.id
                    ? { ...prevProduct, name: e.target.value }
                    : prevProduct
                )
              )
            }
          />
        </div>
        <div className="row">
          <label>Description:</label>
          <textarea
            placeholder="Enter Description"
            value={product.description}
            onChange={(e) =>
              setProductsArray((prevProducts) =>
                prevProducts.map((prevProduct) =>
                  prevProduct.id === product.id
                    ? { ...prevProduct, description: e.target.value }
                    : prevProduct
                )
              )
            }
          />
        </div>
        <div className="row">
          <label>Size:</label>
          <select
            value={product.size}
            onChange={(e) =>
              setProductsArray((prevProducts) =>
                prevProducts.map((prevProduct) =>
                  prevProduct.id === product.id
                    ? { ...prevProduct, size: e.target.value }
                    : prevProduct
                )
              )
            }
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="row">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
