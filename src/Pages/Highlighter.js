import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function Highlighter() {
  const products = [
    {
      name: "Champagne Highlighter",
      price: "$22.99",
      description: "Universal shade for all skin tones",
      image: "🌟"
    },
    {
      name: "Rose Gold Highlighter",
      price: "$24.99",
      description: "Warm glow for evening looks",
      image: "✨"
    },
    {
      name: "Liquid Highlighter",
      price: "$20.99",
      description: "Intense shine, easy to blend",
      image: "💧"
    },
    {
      name: "Highlighter Palette",
      price: "$28.99",
      description: "Multiple shades for every occasion",
      image: "🎨"
    },
    {
      name: "Stick Highlighter",
      price: "$18.99",
      description: "On-the-go application",
      image: "🌟"
    },
    {
      name: "Powder Highlighter",
      price: "$21.99",
      description: "Subtle shimmer for everyday",
      image: "✨"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>🌟 Highlighter Collection</h1>
          <p className="subtitle">Illuminate your best features</p>
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

export default Highlighter;

