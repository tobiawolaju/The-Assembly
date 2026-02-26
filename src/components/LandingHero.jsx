import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headlines = [
  "Don’t Graduate\nUnpositioned.",
  "Your circle determines\nyour leverage.",
  "Build real products.",
  "Ship before graduation.",
  "Enter the world\nalready ahead."
];

const highlightWords = ["positioned", "leverage.", "Build real products.", "Ship before graduation.", "already ahead."];

const LandingHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const renderLineWithHighlight = (line) => {
    let content = line;

    highlightWords.forEach((word) => {
      if (content.includes(word)) {
        content = content.replace(
          word,
          `|||HIGHLIGHT|||${word}|||ENDHIGHLIGHT|||`
        );
      }
    });

    return content.split("|||HIGHLIGHT|||").map((part, i) => {
      if (part.includes("|||ENDHIGHLIGHT|||")) {
        const [highlighted] = part.split("|||ENDHIGHLIGHT|||");
        return (
          <span key={i} className="purple-text">
            {highlighted}
          </span>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const photoGrid = [
    { pos: 0, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400" },
    { pos: 7, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" },
    { pos: 14, url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400" },
    { pos: 20, url: "https://images.unsplash.com/photo-1522071823991-b5ae72647a4a?w=400" },
    { pos: 23, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400" },
  ];

  return (
    <section className="landing-hero">
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
        <div className="headline-container">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="main-headline"
            >
              {headlines[index].split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {renderLineWithHighlight(line)}
                  <br />
                </React.Fragment>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="sub-headline">
          Your Circle is your edge to build products,<br />
          find users and raise capital.
        </p>

        {/* <button className="join-btn">
          Join launch Circle <span style={{ fontSize: "1.2rem" }}>&rarr;</span>
        </button>
    */}
      </div>

      <style jsx>{`
        .landing-hero {
          position: relative;
          min-height: 100vh;
          background-color: #050505;
          color: #ffffff; /* Headline now white */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .purple-text {
          color: rgba(172, 47, 255, 1);
        }

        .bg-grid-container {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(6, 1fr);
          padding: 2vh 2vw;
          gap: 0px;
          z-index: 1;
        }

        .grid-circle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .base-circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background-color: #12121273;
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
          pointer-events: none;
        }

        .headline-container {
          min-height: 12rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .main-headline {
          font-size: clamp(3rem, 9vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 0;
          max-width: 80vw;
          white-space: pre-wrap;
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

        @media (max-width: 768px) {
          .bg-grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
          .base-circle {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHero;