import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/TipDetailPage.css';

function MakeupApplicationTips() {
  return (
    <div className="tip-detail-page">
      <Nav />
      <div className="tip-detail-container">
        <div className="tip-header">
          <div className="tip-icon-large">💄</div>
          <h1>Makeup Application Tips</h1>
        </div>
        
        <div className="tip-content">
          <h2>Foundation Application</h2>
          <div className="steps">
            <div className="step">
              <h3>Prep Your Skin</h3>
              <p>Always start with a clean, moisturized face. Apply primer to create a smooth canvas and help makeup last longer.</p>
            </div>
            
            <div className="step">
              <h3>Choose the Right Tool</h3>
              <p>Use a beauty blender (damp) for a dewy finish, or a foundation brush for more coverage. Blend in circular motions.</p>
            </div>
            
            <div className="step">
              <h3>Application Technique</h3>
              <p>Start from the center of your face and blend outward. Use thin layers and build up coverage gradually.</p>
            </div>
            
            <div className="step">
              <h3>Set Your Makeup</h3>
              <p>Use a setting powder or spray to lock everything in place and prevent creasing throughout the day.</p>
            </div>
          </div>
          
          <div className="tips-section">
            <h2>Expert Tips</h2>
            <ul>
              <li>Match foundation to your neck, not your face</li>
              <li>Test foundation in natural light for best match</li>
              <li>Blend down your neck to avoid harsh lines</li>
              <li>Less is more - build coverage gradually</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MakeupApplicationTips;

