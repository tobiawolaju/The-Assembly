import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  { word: "designers", color: "#FF4D00" },
  { word: "creators", color: "#C5FF00" },
  { word: "builders", color: "#0070FF" }
];

const LandingHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Map photos to specific grid positions to match your screenshots
  const photoGrid = [
    { pos: 0, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400" },
    { pos: 7, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" },
    { pos: 14, url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400" },
    { pos: 20, url: "https://images.unsplash.com/photo-1522071823991-b5ae72647a4a?w=400" },
    { pos: 23, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400" },
  ];

  return (
    <section className="landing-hero">
      {/* Background Grid Layer */}
      <div className="bg-grid-container">
        {[...Array(24)].map((_, i) => {
          const photo = photoGrid.find(p => p.pos === i);
          return (
            <div key={i} className="grid-circle-wrapper">
              <div
                className={`base-circle ${photo ? 'has-photo' : ''}`}
                style={photo ? { backgroundImage: `url(${photo.url})` } : {}}
              />
            </div>
          );
        })}
      </div>

      <div className="hero-content">
        <h1 className="main-headline">
          Don’t <br />
          graduate <br />
          unpositioned.
        </h1>

        <p className="sub-headline">
          Your circle determines your leverage.<br />
          Build real products. Ship before graduation.<br />
          Enter the world positioned to win.
        </p>

        <button className="join-btn">
          Apply — TLC_NG
          <span className="arrow">→</span>
        </button>
      </div>

      <style jsx>{`
        .landing-hero {
          position: relative;
          min-height: 100vh;
          background-color: #050505;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* The background grid of circles */
        .bg-grid-container {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(6, 1fr);
          padding: 2vh 2vw;
          gap: 10px;
          z-index: 1;
        }

        .grid-circle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .base-circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background-color: #121212; /* The "placeholder" circle color */
          background-size: cover;
          background-position: center;
          transition: all 0.4s ease;
        }

        .has-photo {
          background-color: transparent;
          filter: grayscale(100%);
          opacity: 0.7;
        }

        .has-photo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
          z-index: 10;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          pointer-events: none; /* Allows hovering circles behind text */
        }

        .main-headline {
          font-size: clamp(2.5rem, 9vw, 4rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          max-width: 80vw;
        }

        .word-swap {
          display: inline-block;
          height: 1.1em;
        }

        .sub-headline {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.4;
          margin-bottom: 30px;
          pointer-events: auto;
        }

        .join-btn {
          background-color: #ffffff;
          color: #000000;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          pointer-events: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .arrow {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .bg-grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
          .base-circle {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
