import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
  { src: "/images/logo512.png", title: "Developing Young Minds" },
  { src: "/images/logo512.png", title: "Building Intuition" },
  { src: "/images/logo512.png", title: "Empowering Children" }
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
    <div>
      {/* Slideshow Section */}
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

      {/* Brief Intro Section */}
      <div className="intro-section">
        <h2 className="intro-title">Brief Intro</h2>
        <p className="intro-text">
          Welcome to BM Folsom, where we nurture young minds and help children develop their natural intuition. 
          Our innovative program combines hands-on learning experiences with proven methodologies to unlock each 
          child's potential. Through carefully designed activities and personalized guidance, we create an 
          environment where curiosity thrives and confidence grows. Join us on this exciting journey of discovery 
          and watch your child flourish in ways you never imagined possible.
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img src="/images/logo512.png" alt="Intuitive Learning" />
            </div>
            <h3 className="feature-title">Intuitive Learning</h3>
            <p className="feature-description">
              Develop natural problem-solving abilities through interactive experiences 
              that enhance critical thinking and intuitive reasoning skills.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/images/logo512.png" alt="Creative Expression" />
            </div>
            <h3 className="feature-title">Creative Expression</h3>
            <p className="feature-description">
              Foster creativity and self-expression through art, music, and innovative 
              projects that encourage unique perspectives and original thinking.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/images/logo512.png" alt="Collaborative Growth" />
            </div>
            <h3 className="feature-title">Collaborative Growth</h3>
            <p className="feature-description">
              Build social skills and teamwork abilities through group activities 
              that promote cooperation, communication, and mutual support.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/images/logo512.png" alt="Personal Development" />
            </div>
            <h3 className="feature-title">Personal Development</h3>
            <p className="feature-description">
              Strengthen confidence and self-awareness through personalized coaching 
              and activities designed to celebrate each child's unique strengths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;