import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/ProductPage.css';

function EyeMakeup() {
  const products = [
    {
      name: "Eyeshadow Palette",
      price: "$34.99",
      description: "12 vibrant shades for every look",
      image: "🎨"
    },
    {
      name: "Volumizing Mascara",
      price: "$18.99",
      description: "Lengthens and volumizes lashes",
      image: "👁️"
    },
    {
      name: "Liquid Eyeliner",
      price: "$16.99",
      description: "Precise application, long-lasting",
      image: "✏️"
    },
    {
      name: "Eyebrow Pencil",
      price: "$14.99",
      description: "Natural-looking brow definition",
      image: "✏️"
    },
    {
      name: "False Lashes",
      price: "$12.99",
      description: "Dramatic lashes for special events",
      image: "👁️"
    },
    {
      name: "Eyeshadow Primer",
      price: "$15.99",
      description: "Prevents creasing, enhances color",
      image: "🎨"
    }
  ];

  return (
    <div className="product-page">
      <Nav />
      <div className="product-container">
        <div className="product-header">
          <h1>👁️ Eye Makeup Collection</h1>
          <p className="subtitle">Enhance your eyes with our professional eye makeup products</p>
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

export default EyeMakeup;

