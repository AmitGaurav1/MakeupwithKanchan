import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function Cleansers() {
  const products = [
    {
      name: "Gentle Foaming Cleanser",
      price: "$18.99",
      description: "Removes makeup and impurities",
      image: "🧴"
    },
    {
      name: "Micellar Water",
      price: "$16.99",
      description: "No-rinse cleansing solution",
      image: "💧"
    },
    {
      name: "Oil Cleanser",
      price: "$22.99",
      description: "Deep cleansing for all skin types",
      image: "🛢️"
    },
    {
      name: "Exfoliating Cleanser",
      price: "$19.99",
      description: "Removes dead skin cells",
      image: "✨"
    },
    {
      name: "Gel Cleanser",
      price: "$17.99",
      description: "Refreshing formula for oily skin",
      image: "🧴"
    },
    {
      name: "Cream Cleanser",
      price: "$20.99",
      description: "Nourishing for dry skin",
      image: "🧴"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>🧴 Cleansers Collection</h1>
          <p className="subtitle">Gentle formulas to remove impurities</p>
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

export default Cleansers;

