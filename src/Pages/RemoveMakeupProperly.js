import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/TipDetailPage.css';

function RemoveMakeupProperly() {
  return (
    <div className="tip-detail-page">
      <Nav />
      <div className="tip-detail-container">
        <div className="tip-header">
          <div className="tip-icon-large">🧼</div>
          <h1>Remove Makeup Properly</h1>
        </div>
        
        <div className="tip-content">
          <h2>Complete Removal Process</h2>
          <div className="steps">
            <div className="step">
              <h3>Start with Eye Makeup</h3>
              <p>Use a gentle makeup remover or micellar water on a cotton pad. Hold it on your eyes for a few seconds, then gently wipe away.</p>
            </div>
            
            <div className="step">
              <h3>Remove Face Makeup</h3>
              <p>Use a makeup remover or cleansing oil to break down foundation and other face products. Massage gently in circular motions.</p>
            </div>
            
            <div className="step">
              <h3>Double Cleanse</h3>
              <p>Follow with your regular cleanser to ensure all makeup and impurities are removed. This two-step process is essential.</p>
            </div>
            
            <div className="step">
              <h3>Don't Skip Skincare</h3>
              <p>After removing makeup, continue with your evening skincare routine - toner, serum, and moisturizer.</p>
            </div>
          </div>
          
          <div className="tips-section">
            <h2>Pro Tips</h2>
            <ul>
              <li>Never sleep with makeup on - it clogs pores and causes breakouts</li>
              <li>Be gentle around the eye area - don't rub harshly</li>
              <li>Use oil-based removers for waterproof makeup</li>
              <li>Double cleansing ensures completely clean skin</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RemoveMakeupProperly;

