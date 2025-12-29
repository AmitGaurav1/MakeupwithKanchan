import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/TipDetailPage.css';

function NaturalGlow() {
  return (
    <div className="tip-detail-page">
      <Nav />
      <div className="tip-detail-container">
        <div className="tip-header">
          <div className="tip-icon-large">✨</div>
          <h1>Natural Glow Tips</h1>
        </div>
        
        <div className="tip-content">
          <h2>Achieve That Radiant Look</h2>
          <div className="steps">
            <div className="step">
              <h3>Mix Highlighter with Foundation</h3>
              <p>Mix a drop of liquid highlighter with your foundation for an all-over radiant glow. This gives a natural, dewy finish.</p>
            </div>
            
            <div className="step">
              <h3>Strategic Highlighting</h3>
              <p>Apply highlighter to high points: cheekbones, bridge of nose, cupid's bow, and inner corners of eyes.</p>
            </div>
            
            <div className="step">
              <h3>Use Dewy Products</h3>
              <p>Opt for dewy or satin finish foundations and avoid heavy matte products for a natural glow.</p>
            </div>
            
            <div className="step">
              <h3>Skincare First</h3>
              <p>Well-moisturized skin is the foundation of a natural glow. Keep your skin hydrated and healthy.</p>
            </div>
          </div>
          
          <div className="tips-section">
            <h2>Pro Tips</h2>
            <ul>
              <li>Less is more - subtle glow looks more natural</li>
              <li>Use cream or liquid highlighters for a dewy look</li>
              <li>Set only where needed - let some areas stay dewy</li>
              <li>Spritz with a hydrating mist for extra glow</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NaturalGlow;

