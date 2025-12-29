import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/TipDetailPage.css';

function EyeMakeupTricks() {
  return (
    <div className="tip-detail-page">
      <Nav />
      <div className="tip-detail-container">
        <div className="tip-header">
          <div className="tip-icon-large">👁️</div>
          <h1>Eye Makeup Tricks</h1>
        </div>
        
        <div className="tip-content">
          <h2>Professional Techniques</h2>
          <div className="steps">
            <div className="step">
              <h3>Use Primer</h3>
              <p>Always apply eyeshadow primer on your eyelids to prevent creasing and make colors pop. This helps makeup last all day.</p>
            </div>
            
            <div className="step">
              <h3>Mascara Application</h3>
              <p>Apply mascara in a zigzag motion from roots to tips. Wiggle the wand to separate lashes and create volume.</p>
            </div>
            
            <div className="step">
              <h3>Eyeliner Tips</h3>
              <p>Start with small strokes and connect them. For winged liner, follow your lower lash line upward as a guide.</p>
            </div>
            
            <div className="step">
              <h3>Blend Eyeshadow</h3>
              <p>Always blend eyeshadow edges to avoid harsh lines. Use a clean blending brush for seamless transitions.</p>
            </div>
          </div>
          
          <div className="tips-section">
            <h2>Expert Tips</h2>
            <ul>
              <li>Use a white or nude eyeliner on waterline to make eyes appear bigger</li>
              <li>Curl lashes before mascara for maximum lift</li>
              <li>Apply eyeshadow before foundation to catch any fallout</li>
              <li>Use tape as a guide for perfect winged eyeliner</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EyeMakeupTricks;

