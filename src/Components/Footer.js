import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-logo">GlowMuse</h3>
            <p className="footer-description">
              Your one-stop destination for all things beauty. Discover makeup, skincare, 
              expert tips, and tutorials to enhance your natural glow.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                📘
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                🐦
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                ▶️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/makeup">Makeup</Link></li>
              <li><Link to="/skincare">Skincare</Link></li>
              <li><Link to="/beauty-tips">Beauty Tips</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="footer-section">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-section">
            <h4>Contact Details</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@glowmuse.com</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Beauty Street, Makeup City, MC 12345</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Mon-Fri: 9AM-6PM | Sat-Sun: 10AM-4PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GlowMuse. All rights reserved.</p>
          <p className="footer-author">Made with 💖 by Kanchan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

