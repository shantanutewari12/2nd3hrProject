import React, { useState } from 'react';
import Product from './Product';
const ProductList = () => {
  const [productsArray, setProductsArray] = useState([
    {
      id: 1,
      name: '',
      description: '',
      size: 'small',
    },
   
    
  ]);

  return (
    <div className="product-list">
      {productsArray.map((product) => (
        <Product
          key={product.id}
          product={product}
          setProductsArray={setProductsArray}
        />
      ))}
    </div>
  );
};

export default ProductList;
