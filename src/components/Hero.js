import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const { ref: fadeInRef, inView: fadeInVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="hero">
      <div className={`hero-content ${fadeInVisible ? 'fade-in' : ''}`} ref={fadeInRef}>
        <div className="hero-left">
          <h1>Innovate ideas for your products & Business</h1>
          <p>Agency that build many amazing products to boost your business to the next level.</p>
          <div className="stairs">
            <div className="stair">
              <span>28%</span>
              <p>INVENTING THE FUTURE OF DESIGN</p>
            </div>
            <div className="stair">
              <span>55%</span>
              <p>Grow since last day</p>
              <div className="user-images">
                <img src="https://via.placeholder.com/30" alt="user" />
                <img src="https://via.placeholder.com/30" alt="user" />
                <img src="https://via.placeholder.com/30" alt="user" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="circle-text">
            <span>Subscribe to view collections</span>
          </div>
          <div className="global-partners">
            <h2>Global partners</h2>
            <p>We are officially partners with the world's best brands. Subscribe to our newsletter.</p>
          </div>
          <div className="image-container">
            <img src="https://via.placeholder.com/150" alt="project views" />
            <div className="image-overlay">
              <span>4.875</span>
              <p>Project Views last year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
