import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function FaceMasks() {
  const products = [
    {
      name: "Clay Mask",
      price: "$18.99",
      description: "Deep cleansing for oily skin",
      image: "🎭"
    },
    {
      name: "Hydrating Sheet Mask",
      price: "$4.99",
      description: "Instant moisture boost",
      image: "💧"
    },
    {
      name: "Charcoal Mask",
      price: "$19.99",
      description: "Detoxifies and purifies",
      image: "🖤"
    },
    {
      name: "Brightening Mask",
      price: "$21.99",
      description: "Illuminates dull skin",
      image: "✨"
    },
    {
      name: "Overnight Mask",
      price: "$24.99",
      description: "Repair while you sleep",
      image: "🌙"
    },
    {
      name: "Exfoliating Mask",
      price: "$20.99",
      description: "Removes dead skin cells",
      image: "🎭"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>🎭 Face Masks Collection</h1>
          <p className="subtitle">Deep cleansing and rejuvenating treatments</p>
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

export default FaceMasks;

