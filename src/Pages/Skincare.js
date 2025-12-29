import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/Skincare.css';

function Skincare() {
  return (
    <div className="skincare-page">
      <Nav />
      <div className="skincare-container">
        <h1>Skincare Collection</h1>
        <p className="subtitle">Nurture your skin with our premium products</p>
        
        <div className="skincare-grid">
          <Link to="/cleansers" className="skincare-card">
            <div className="skincare-image">🧴</div>
            <h3>Cleansers</h3>
            <p>Gentle formulas to remove impurities</p>
          </Link>
          
          <Link to="/moisturizers" className="skincare-card">
            <div className="skincare-image">💧</div>
            <h3>Moisturizers</h3>
            <p>Hydrate and nourish your skin</p>
          </Link>
          
          <Link to="/sunscreen" className="skincare-card">
            <div className="skincare-image">☀️</div>
            <h3>Sunscreen</h3>
            <p>Protect your skin from harmful UV rays</p>
          </Link>
          
          <Link to="/serums" className="skincare-card">
            <div className="skincare-image">🌿</div>
            <h3>Serums</h3>
            <p>Targeted treatments for specific concerns</p>
          </Link>
          
          <Link to="/face-masks" className="skincare-card">
            <div className="skincare-image">🎭</div>
            <h3>Face Masks</h3>
            <p>Deep cleansing and rejuvenating treatments</p>
          </Link>
          
          <Link to="/eye-care" className="skincare-card">
            <div className="skincare-image">👁️</div>
            <h3>Eye Care</h3>
            <p>Specialized products for delicate eye area</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skincare;
