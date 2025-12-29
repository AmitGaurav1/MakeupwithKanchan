import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function Moisturizers() {
  const products = [
    {
      name: "Daily Moisturizer",
      price: "$24.99",
      description: "Lightweight hydration for everyday",
      image: "💧"
    },
    {
      name: "Night Cream",
      price: "$28.99",
      description: "Intensive overnight repair",
      image: "🌙"
    },
    {
      name: "Gel Moisturizer",
      price: "$22.99",
      description: "Oil-free formula for oily skin",
      image: "💧"
    },
    {
      name: "Rich Cream",
      price: "$26.99",
      description: "Deep hydration for dry skin",
      image: "🧴"
    },
    {
      name: "SPF Moisturizer",
      price: "$25.99",
      description: "Hydration with sun protection",
      image: "☀️"
    },
    {
      name: "Face Oil",
      price: "$29.99",
      description: "Nourishing oil for all skin types",
      image: "🛢️"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>💧 Moisturizers Collection</h1>
          <p className="subtitle">Hydrate and nourish your skin</p>
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

export default Moisturizers;

