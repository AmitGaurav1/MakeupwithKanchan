import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/InfoPage.css';

function PrivacyPolicy() {
  return (
    <div className="info-page">
      <Nav />
      <div className="info-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="info-content">
          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us. This may include your name, email address, shipping address, and payment information.</p>
          </section>
          
          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to process your orders, communicate with you, improve our services, and send you promotional materials (with your consent).</p>
          </section>
          
          <section>
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business.</p>
          </section>
          
          <section>
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>
          
          <section>
            <h2>5. Cookies</h2>
            <p>We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>
          </section>
          
          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time. Contact us to exercise these rights.</p>
          </section>
          
          <section>
            <h2>7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at info@glowmuse.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

