import React from "react";
import Nav from "../Components/nav";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import '../CSS/Home.css';

function Home() {
  return (
    <div className="home-page"> 
        <Nav />
        <ImageSlider />
        <Footer />
    </div>
  );
}    
export default Home;