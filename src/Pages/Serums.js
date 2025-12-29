import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function Serums() {
  const products = [
    {
      name: "Vitamin C Serum",
      price: "$32.99",
      description: "Brightens and evens skin tone",
      image: "🌿"
    },
    {
      name: "Hyaluronic Acid Serum",
      price: "$28.99",
      description: "Intense hydration boost",
      image: "💧"
    },
    {
      name: "Retinol Serum",
      price: "$34.99",
      description: "Anti-aging and skin renewal",
      image: "✨"
    },
    {
      name: "Niacinamide Serum",
      price: "$26.99",
      description: "Reduces pores and oiliness",
      image: "🌿"
    },
    {
      name: "Peptide Serum",
      price: "$36.99",
      description: "Firms and plumps skin",
      image: "💧"
    },
    {
      name: "Antioxidant Serum",
      price: "$29.99",
      description: "Protects against environmental damage",
      image: "🌿"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>🌿 Serums Collection</h1>
          <p className="subtitle">Targeted treatments for specific concerns</p>
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

export default Serums;

