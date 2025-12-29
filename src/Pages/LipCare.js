import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/TipDetailPage.css';

function LipCare() {
  return (
    <div className="tip-detail-page">
      <Nav />
      <div className="tip-detail-container">
        <div className="tip-header">
          <div className="tip-icon-large">💋</div>
          <h1>Lip Care Guide</h1>
        </div>
        
        <div className="tip-content">
          <h2>Daily Lip Care Routine</h2>
          <div className="steps">
            <div className="step">
              <h3>Exfoliate Weekly</h3>
              <p>Gently exfoliate your lips once or twice a week using a lip scrub or soft toothbrush to remove dead skin cells.</p>
            </div>
            
            <div className="step">
              <h3>Hydrate Daily</h3>
              <p>Apply lip balm throughout the day, especially before bed. Look for ingredients like shea butter, beeswax, or hyaluronic acid.</p>
            </div>
            
            <div className="step">
              <h3>Prep Before Lipstick</h3>
              <p>Always apply lip balm before lipstick for a smooth finish. Let it absorb for a few minutes before applying color.</p>
            </div>
            
            <div className="step">
              <h3>Protect from Sun</h3>
              <p>Use lip balm with SPF when spending time outdoors to protect your lips from sun damage.</p>
            </div>
          </div>
          
          <div className="tips-section">
            <h2>Pro Tips</h2>
            <ul>
              <li>Don't lick your lips - saliva dries them out</li>
              <li>Stay hydrated by drinking plenty of water</li>
              <li>Remove lipstick properly before bed</li>
              <li>Use a lip liner to prevent feathering</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LipCare;

