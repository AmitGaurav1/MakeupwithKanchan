import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/InfoPage.css';

function TermsConditions() {
  return (
    <div className="info-page">
      <Nav />
      <div className="info-container">
        <h1>Terms & Conditions</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="info-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using GlowMuse, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          
          <section>
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on GlowMuse's website for personal, non-commercial transitory viewing only.</p>
          </section>
          
          <section>
            <h2>3. Product Information</h2>
            <p>We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
          </section>
          
          <section>
            <h2>4. Pricing</h2>
            <p>All prices are subject to change without notice. We reserve the right to modify prices at any time.</p>
          </section>
          
          <section>
            <h2>5. Returns & Refunds</h2>
            <p>Returns are accepted within 30 days of purchase. Products must be unused and in original packaging. Refunds will be processed within 5-7 business days.</p>
          </section>
          
          <section>
            <h2>6. Limitation of Liability</h2>
            <p>GlowMuse shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website.</p>
          </section>
          
          <section>
            <h2>7. Contact Information</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us at info@glowmuse.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsConditions;

