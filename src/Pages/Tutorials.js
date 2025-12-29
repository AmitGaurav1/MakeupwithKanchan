import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/Tutorials.css';

function Tutorials() {
  const tutorials = [
    {
      title: "Natural Everyday Look",
      description: "Learn how to create a fresh, natural makeup look perfect for daily wear",
      duration: "15 min",
      level: "Beginner"
    },
    {
      title: "Glamorous Evening Look",
      description: "Step-by-step guide to achieving a stunning evening makeup look",
      duration: "30 min",
      level: "Intermediate"
    },
    {
      title: "Smoky Eye Tutorial",
      description: "Master the art of creating a perfect smoky eye",
      duration: "20 min",
      level: "Intermediate"
    },
    {
      title: "Skincare Routine",
      description: "Complete guide to building an effective skincare routine",
      duration: "10 min",
      level: "Beginner"
    },
    {
      title: "Contouring & Highlighting",
      description: "Learn professional contouring and highlighting techniques",
      duration: "25 min",
      level: "Advanced"
    },
    {
      title: "Bridal Makeup",
      description: "Create a flawless bridal look that lasts all day",
      duration: "45 min",
      level: "Advanced"
    }
  ];

  return (
    <div className="tutorials-page">
      <Nav />
      <div className="tutorials-container">
        <h1>Makeup Tutorials</h1>
        <p className="subtitle">Learn from our expert tutorials</p>
        
        <div className="tutorials-grid">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="tutorial-card">
              <div className="tutorial-thumbnail">
                <span className="play-icon">▶</span>
              </div>
              <div className="tutorial-info">
                <div className="tutorial-meta">
                  <span className="duration">{tutorial.duration}</span>
                  <span className={`level ${tutorial.level.toLowerCase()}`}>{tutorial.level}</span>
                </div>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <button className="watch-btn">Watch Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tutorials;
