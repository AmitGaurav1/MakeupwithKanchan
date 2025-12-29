import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/nav";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import '../CSS/Makeup.css';

function Makeup() {
  return (
    <div className="makeup-page">
      <Nav />
      <ImageSlider />
      <div className="makeup-container">
        <h1>Makeup Collection</h1>
        <p className="subtitle">Discover our stunning makeup products</p>
        
        <div className="makeup-grid">
          <Link to="/lipsticks" className="makeup-card">
            <div className="makeup-image">💄</div>
            <h3>Lipsticks</h3>
            <p>Long-lasting, vibrant colors for every occasion</p>
          </Link>
          
          <Link to="/eye-makeup" className="makeup-card">
            <div className="makeup-image">👁️</div>
            <h3>Eye Makeup</h3>
            <p>Eyeshadows, mascaras, and eyeliners</p>
          </Link>
          
          <Link to="/foundation" className="makeup-card">
            <div className="makeup-image">✨</div>
            <h3>Foundation</h3>
            <p>Perfect coverage for flawless skin</p>
          </Link>
          
          <Link to="/blush-bronzer" className="makeup-card">
            <div className="makeup-image">💋</div>
            <h3>Blush & Bronzer</h3>
            <p>Add dimension and glow to your face</p>
          </Link>
          
          <Link to="/highlighter" className="makeup-card">
            <div className="makeup-image">🌟</div>
            <h3>Highlighter</h3>
            <p>Illuminate your best features</p>
          </Link>
          
          <Link to="/makeup-brushes" className="makeup-card">
            <div className="makeup-image">🎨</div>
            <h3>Makeup Brushes</h3>
            <p>Professional tools for perfect application</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Makeup;
