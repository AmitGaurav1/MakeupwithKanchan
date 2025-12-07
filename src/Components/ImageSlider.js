import React, { useState, useEffect } from "react";
import "../CSS/ImageSlider.css";

const images = [
  "https://i.pinimg.com/736x/9c/71/75/9c7175da46c529758a246af78f084baa.jpg",
  "https://i.pinimg.com/736x/60/00/2c/60002c9e97a1797297ccc0752cc43829.jpg",
  "https://i.pinimg.com/736x/64/82/70/648270b25060242417dd8a869e02b9af.jpg",
  "https://i.pinimg.com/736x/47/10/fd/4710fd416d85f941662d9d41e37360f8.jpg"
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
      {images.map((img, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <img src={img} alt={`slide ${index}`} />}
        </div>
      ))}

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
