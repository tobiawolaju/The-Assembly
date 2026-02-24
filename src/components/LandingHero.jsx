import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  { word: "designers", color: "#FF4D00" }, // Orange
  { word: "creators", color: "#C5FF00" },  // Lime Green
  { word: "builders", color: "#0070FF" },  // Blue
  { word: "founders", color: "#FFFFFF" }   // White
];

const LandingHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Simplified positions to mimic the scattered circle look in the images
  const photoPositions = [
    { top: '10%', left: '15%', size: '110px' },
    { top: '25%', right: '15%', size: '130px' },
    { bottom: '25%', left: '10%', size: '120px' },
    { bottom: '15%', right: '10%', size: '140px' },
    { top: '50%', right: '20%', size: '110px' },
  ];

  const photos = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400",
    "https://images.unsplash.com/photo-1522071823991-b5ae72647a4a?w=400",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400",
  ];

  return (
    <section className="landing-hero">
      {/* Background Layer: Subtle dark circles and scattered photos */}
      <div className="background-overlay">
        {photoPositions.map((pos, i) => (
          <div 
            key={i} 
            className="scattered-photo"
            style={{ 
              ...pos, 
              backgroundImage: `url(${photos[i]})`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="main-headline">
          Cracked <br />
          <span className="word-swap">
            <AnimatePresence mode="wait">
              <motion.span
                key={content[index].word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ color: content[index].color }}
                className="highlighted-word"
              >
                {content[index].word}
              </motion.span>
            </AnimatePresence>
          </span> 
          <br />need a <br />cracked home.
        </h1>
        
        <p className="sub-headline">
          Your circle is your edge to<br />
          build products, find users and<br />
          raise capital.
        </p>

        <button className="join-btn">
          Join Inner Circle 
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .landing-hero {
          position: relative;
          min-height: 100vh;
          background-color: #080808;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
        }

        .background-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .scattered-photo {
          position: absolute;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          filter: grayscale(100%) brightness(0.7);
          opacity: 0.6;
          transition: transform 0.3s ease;
          box-shadow: 0 0 40px rgba(0,0,0,0.5);
        }

        .scattered-photo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-headline {
          font-size: clamp(3.5rem, 12vw, 5.5rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.05em;
          margin-bottom: 30px;
        }

        .word-swap {
          display: block;
          height: 1.1em;
          position: relative;
        }

        .highlighted-word {
          display: block;
        }

        .sub-headline {
          font-size: 1.25rem;
          color: #888;
          line-height: 1.3;
          margin-bottom: 40px;
          font-weight: 500;
          max-width: 400px;
        }

        .join-btn {
          background-color: #ffffff;
          color: #000000;
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .join-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .main-headline {
            font-size: 3.2rem;
          }
          .scattered-photo {
            opacity: 0.4; /* Fade background more on mobile for readability */
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
