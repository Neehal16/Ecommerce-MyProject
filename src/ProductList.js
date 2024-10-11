
import React from 'react';

const ProductList = ({ products, addToCart, searchQuery }) => {
  return (
    <div className="product-list">
      {products
        .filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{Math.round(product.price * 1000).toLocaleString('en-IN')}/-</p>
            <button class="btn btn-outline-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            <button class="btn btn-outline-success">Buy Now</button>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
