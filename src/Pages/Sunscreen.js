import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function Sunscreen() {
  const products = [
    {
      name: "SPF 50 Sunscreen",
      price: "$19.99",
      description: "High protection for face and body",
      image: "☀️"
    },
    {
      name: "Mineral Sunscreen",
      price: "$22.99",
      description: "Natural zinc oxide formula",
      image: "🌞"
    },
    {
      name: "Face Sunscreen",
      price: "$18.99",
      description: "Lightweight, non-greasy formula",
      image: "✨"
    },
    {
      name: "Sport Sunscreen",
      price: "$21.99",
      description: "Water-resistant for active days",
      image: "🏃"
    },
    {
      name: "Tinted Sunscreen",
      price: "$24.99",
      description: "Protection with light coverage",
      image: "🎨"
    },
    {
      name: "Kids Sunscreen",
      price: "$16.99",
      description: "Gentle formula for sensitive skin",
      image: "👶"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>☀️ Sunscreen Collection</h1>
          <p className="subtitle">Protect your skin from harmful UV rays</p>
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

export default Sunscreen;

