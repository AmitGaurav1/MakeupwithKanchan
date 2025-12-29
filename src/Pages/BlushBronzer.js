import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function BlushBronzer() {
  const products = [
    {
      name: "Peachy Blush",
      price: "$19.99",
      description: "Natural flush of color",
      image: "💋"
    },
    {
      name: "Bronzing Powder",
      price: "$24.99",
      description: "Sunkissed glow all year round",
      image: "☀️"
    },
    {
      name: "Pink Blush Palette",
      price: "$28.99",
      description: "Multiple shades for every skin tone",
      image: "🌸"
    },
    {
      name: "Contour Kit",
      price: "$32.99",
      description: "Define and sculpt your features",
      image: "🎨"
    },
    {
      name: "Cream Blush",
      price: "$21.99",
      description: "Dewy finish, easy to blend",
      image: "💋"
    },
    {
      name: "Blush Brush",
      price: "$15.99",
      description: "Soft brush for seamless application",
      image: "🖌️"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>💋 Blush & Bronzer Collection</h1>
          <p className="subtitle">Add dimension and glow to your face</p>
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

export default BlushBronzer;

