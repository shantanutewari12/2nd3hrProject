import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import './Product.css'; 

const Product = ({ product, setProductsArray }) => {
  const { addToCart } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

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

    
    const updatedCartData = [...cartData, productToAdd];
    setCartData(updatedCartData);
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));

  
    setProductsArray((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id
          ? { ...prevProduct, name: '', description: '' }
          : prevProduct
      )
    );

    // Send the order data to the backend
    axios
      .post('https://crudcrud.com/api/23dab8a4f34c400a8074c67d8a5a6183/orderData', {
        // You can customize the data structure sent to the backend as needed
        product_id: product.id,
        product_name: product.name,
        product_description: product.description,
        product_size: product.size,
      })
      .then((response) => {
        console.log('Order data sent to the backend:', response.data);
      })
      .catch((error) => {
        console.error('Error sending order data to the backend:', error);
      });
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
