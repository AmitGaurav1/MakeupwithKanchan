import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function MakeupBrushes() {
  const products = [
    {
      name: "Foundation Brush Set",
      price: "$39.99",
      description: "Complete set for flawless base",
      image: "🖌️"
    },
    {
      name: "Eye Brush Collection",
      price: "$29.99",
      description: "Professional eye makeup brushes",
      image: "👁️"
    },
    {
      name: "Blending Brush",
      price: "$16.99",
      description: "Perfect for seamless blending",
      image: "🎨"
    },
    {
      name: "Beauty Sponge",
      price: "$12.99",
      description: "Damp application for dewy finish",
      image: "🧽"
    },
    {
      name: "Complete Brush Set",
      price: "$49.99",
      description: "All-in-one professional kit",
      image: "🖌️"
    },
    {
      name: "Kabuki Brush",
      price: "$18.99",
      description: "Dense brush for powder application",
      image: "🖌️"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>🎨 Makeup Brushes Collection</h1>
          <p className="subtitle">Professional tools for perfect application</p>
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

export default MakeupBrushes;

