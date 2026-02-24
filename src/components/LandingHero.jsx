import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["builders", "creators", "traders", "founders"];

const LandingHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const photos = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522071823991-b5ae72647a4a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
  ];

  const photoConfigs = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      url: photos[i % photos.length],
      visibleByDefault: Math.random() < 0.33,
      isColorOnHover: Math.random() > 0.5,
      bgColor: ['#1a1a1a', '#222', '#141414', '#0d0d0d'][Math.floor(Math.random() * 4)]
    }));
  }, [photos]);

  return (
    <section className="landing-hero">
      <div className="photo-bg">
        {photoConfigs.map((config) => (
          <div
            key={config.id}
            className={`photo-circle ${config.visibleByDefault ? 'show-default' : ''} ${config.isColorOnHover ? 'hover-color' : 'hover-gray'}`}
            style={{
              backgroundColor: config.bgColor,
            }}
          >
            <div
              className="photo-inner"
              style={{ backgroundImage: `url(${config.url})` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className="main-headline">
          Cracked <span className="word-swap">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="highlighted-word"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span> need<br />
          a cracked home.
        </h1>
        <p className="sub-headline">
          Your circle is your edge to build products,<br />
          find users and raise capital.
        </p>
        <button className="join-btn">
          Join Inner Circle &rarr;
        </button>
      </div>

      <style jsx>{`
        .landing-hero {
          position: relative;
          min-height: 135vh;
          background-color: #0b0b0b;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .top-nav {
          position: absolute;
          top: 0;
          width: 100%;
          padding: 40px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          color: #666;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .photo-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 20px;
          padding: 80px;
          z-index: 1;
        }

        .photo-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: auto;
          position: relative;
          z-index: 1;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible; /* Allow scale to go outside */
        }

        .photo-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          filter: grayscale(1);
          transition: all 0.5s ease;
        }

        .photo-circle.show-default .photo-inner {
          opacity: 0.2;
        }

        .photo-circle:hover {
          z-index: 200;
          transform: scale(1.1);
        }

        .photo-circle:hover .photo-inner {
          opacity: 1;
        }

        .photo-circle.hover-color:hover .photo-inner {
          filter: grayscale(0);
        }

        .photo-circle.hover-gray:hover .photo-inner {
          filter: grayscale(1);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          pointer-events: none;
        }

        .hero-content button, .hero-content .word-swap {
          pointer-events: auto;
        }

        .main-headline {
          font-size: clamp(3rem, 10vw, 5.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
        }

        .word-swap {
          display: inline-block;
          min-width: 280px;
          text-align: center;
        }

        .highlighted-word {
          color: #5900ffff;
        }

        .sub-headline {
          font-size: 1.5rem;
          color: #a1a1aa;
          line-height: 1.4;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .join-btn {
          background-color: #fff;
          color: #000;
          padding: 16px 32px;
          border-radius: 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .join-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .top-nav {
            padding: 20px;
          }
          .photo-bg {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
          }
          .photo-circle {
            width: 150px;
            height: 150px;
          }
          .word-swap {
            min-width: 150px;
          }
          .main-headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
