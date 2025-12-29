import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function Foundation() {
  const products = [
    {
      name: "Matte Foundation",
      price: "$32.99",
      description: "Full coverage, matte finish",
      image: "✨"
    },
    {
      name: "Dewy Foundation",
      price: "$34.99",
      description: "Natural glow with medium coverage",
      image: "💧"
    },
    {
      name: "BB Cream",
      price: "$24.99",
      description: "Lightweight, all-in-one coverage",
      image: "🌟"
    },
    {
      name: "Concealer",
      price: "$18.99",
      description: "Covers imperfections flawlessly",
      image: "✨"
    },
    {
      name: "Setting Powder",
      price: "$22.99",
      description: "Locks makeup in place all day",
      image: "💨"
    },
    {
      name: "Foundation Brush",
      price: "$16.99",
      description: "Professional application tool",
      image: "🖌️"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>✨ Foundation Collection</h1>
          <p className="subtitle">Perfect coverage for flawless skin</p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Foundation;

