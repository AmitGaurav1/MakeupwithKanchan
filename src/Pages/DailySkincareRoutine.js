import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/TipDetailPage.css';

function DailySkincareRoutine() {
  return (
    <div className="tip-detail-page">
      <Nav />
      <div className="tip-detail-container">
        <div className="tip-header">
          <div className="tip-icon-large">🌅</div>
          <h1>Daily Skincare Routine</h1>
        </div>
        
        <div className="tip-content">
          <h2>Step-by-Step Guide</h2>
          <div className="steps">
            <div className="step">
              <h3>Step 1: Cleanser</h3>
              <p>Start your day with a gentle cleanser to remove overnight oil and prepare your skin. Use lukewarm water and massage gently in circular motions.</p>
            </div>
            
            <div className="step">
              <h3>Step 2: Toner</h3>
              <p>Apply a toner to balance your skin's pH levels and remove any remaining impurities. Use a cotton pad or pat directly with your hands.</p>
            </div>
            
            <div className="step">
              <h3>Step 3: Serum</h3>
              <p>Apply your chosen serum (Vitamin C for morning, Retinol for evening) to target specific skin concerns. Let it absorb for a few minutes.</p>
            </div>
            
            <div className="step">
              <h3>Step 4: Moisturizer</h3>
              <p>Hydrate your skin with a moisturizer suitable for your skin type. This locks in moisture and creates a barrier.</p>
            </div>
            
            <div className="step">
              <h3>Step 5: Sunscreen</h3>
              <p>Always finish with sunscreen (SPF 30+) in the morning to protect against harmful UV rays. This is crucial even on cloudy days!</p>
            </div>
          </div>
          
          <div className="tips-section">
            <h2>Pro Tips</h2>
            <ul>
              <li>Use products suitable for your skin type (oily, dry, combination, sensitive)</li>
              <li>Be consistent - skincare takes time to show results</li>
              <li>Don't skip sunscreen - it's the most important step!</li>
              <li>Adjust your routine based on seasons and skin changes</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DailySkincareRoutine;

