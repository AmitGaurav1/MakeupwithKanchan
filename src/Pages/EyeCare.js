import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function EyeCare() {
  const products = [
    {
      name: "Eye Cream",
      price: "$28.99",
      description: "Reduces fine lines and dark circles",
      image: "👁️"
    },
    {
      name: "Eye Serum",
      price: "$32.99",
      description: "Intensive treatment for eye area",
      image: "💧"
    },
    {
      name: "Eye Mask Patches",
      price: "$14.99",
      description: "Instant depuffing and hydration",
      image: "👁️"
    },
    {
      name: "Eye Gel",
      price: "$24.99",
      description: "Cooling gel for tired eyes",
      image: "❄️"
    },
    {
      name: "Retinol Eye Cream",
      price: "$34.99",
      description: "Anti-aging for delicate eye area",
      image: "✨"
    },
    {
      name: "Caffeine Eye Cream",
      price: "$26.99",
      description: "Reduces puffiness and dark circles",
      image: "☕"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>👁️ Eye Care Collection</h1>
          <p className="subtitle">Specialized products for delicate eye area</p>
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

export default EyeCare;

