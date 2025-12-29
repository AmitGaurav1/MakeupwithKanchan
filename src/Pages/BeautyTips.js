import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/BeautyTips.css';

function BeautyTips() {
  const tips = [
    {
      title: "Daily Skincare Routine",
      content: "Start with a gentle cleanser, apply toner, use a serum, moisturize, and always finish with sunscreen.",
      icon: "🌅",
      link: "/daily-skincare-routine"
    },
    {
      title: "Makeup Application Tips",
      content: "Always prep your skin with moisturizer before applying foundation. Use a beauty blender for seamless blending.",
      icon: "💄",
      link: "/makeup-application-tips"
    },
    {
      title: "Lip Care",
      content: "Exfoliate your lips weekly and always apply lip balm before lipstick for a smooth finish.",
      icon: "💋",
      link: "/lip-care"
    },
    {
      title: "Eye Makeup Tricks",
      content: "Use primer on your eyelids to prevent creasing. Apply mascara in zigzag motion for fuller lashes.",
      icon: "👁️",
      link: "/eye-makeup-tricks"
    },
    {
      title: "Natural Glow",
      content: "Mix a drop of highlighter with your foundation for an all-over radiant glow.",
      icon: "✨",
      link: "/natural-glow"
    },
    {
      title: "Remove Makeup Properly",
      content: "Always remove makeup before bed. Use a gentle makeup remover followed by your regular cleanser.",
      icon: "🧼",
      link: "/remove-makeup-properly"
    }
  ];

  return (
    <div className="beauty-tips-page">
      <Nav />
      <div className="beauty-tips-container">
        <h1>Beauty Tips & Tricks</h1>
        <p className="subtitle">Expert advice for your beauty routine</p>
        
        <div className="tips-grid">
          {tips.map((tip, index) => (
            <Link key={index} to={tip.link} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BeautyTips;
