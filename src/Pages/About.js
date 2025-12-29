import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/About.css';

function About() {
  return (
    <div className="about-page">
      <Nav />
      <div className="about-container">
        <div className="about-hero">
          <h1>About GlowMuse</h1>
          <p className="tagline">Your Beauty, Our Passion</p>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Welcome to GlowMuse, where beauty meets expertise. We are passionate about helping 
              you discover your unique beauty and express yourself through makeup and skincare. 
              Our mission is to provide high-quality products, expert advice, and inspiring 
              tutorials to enhance your natural glow.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe that beauty is for everyone. Our goal is to make professional-quality 
              makeup and skincare accessible to all, while promoting self-expression, confidence, 
              and self-care. Every product we recommend and every tip we share is designed to 
              help you feel beautiful in your own skin.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">✨</div>
                <h3>Quality Products</h3>
                <p>Curated selection of premium beauty products</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🎓</div>
                <h3>Expert Guidance</h3>
                <p>Professional tips and tutorials from beauty experts</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💖</div>
                <h3>Personalized Care</h3>
                <p>Tailored recommendations for your unique needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
