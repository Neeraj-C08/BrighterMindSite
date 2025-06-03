import React, { useState, useEffect } from "react";
import "./Home.css"; // ✅ lowercased to mnpnmatch the file system

const images = [
  { src: "/images/logo512.png", title: "Logo 1" },
  { src: "/images/logo512.png", title: "Logo 2" },
  { src: "/images/logo512.png", title: "Logo 3" }
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={image.src} alt={image.title} />
          <div className="slide-title">{image.title}</div>
        </div>
      ))}

      <div className="slideshow-controls">
        <button onClick={prevSlide}></button>
        <button onClick={nextSlide}></button>
      </div>
    </div>
  );
};

export default Home;
