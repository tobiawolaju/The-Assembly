import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-headline"
        >
          <span className="hover-word">Builders</span>. <span className="hover-word">Developers</span>. <span className="hover-word">Designers</span>. <span className="hover-word">Student founders</span> — <br />
          primarily building within the Monad ecosystem.
        </motion.h1>
      </div>

      <style jsx>{`
        .hero-section {
          background-color: #000;
          color: #fff;
          padding: 120px 20px 60px;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          margin: 0 auto;
        }

        .hero-headline {
          max-width: 80vw;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.04em;
          text-align: left;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .hover-word {
          transition: color 0.3s ease;
          cursor: crosshair;
        }

        .hover-word:hover {
          color: #7f2fffff;
        }

        .separator {
          color: #333;
          margin: 0px;
        }

        .tilde {
          color: #666;
        }

        @media (max-width: 768px) {
          .hero-section {
            max-width: 80vw;
            scale: 0.9;
          }
          .hero-headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
