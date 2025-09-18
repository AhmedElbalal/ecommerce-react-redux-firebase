// src/pages/HomePage.js
import React from "react";
import products from "../data/products";
import "./HomePage.css"; // Import CSS file for styling

function HomePage() {
  return (
    <div className="home-container">
      <h2 className="page-title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="btn-add">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
