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
          The Misfits <span className="separator">&lt;&gt;</span> The Rebels <span className="separator">&lt;&gt;</span> The Troublemakers <span className="separator">&lt;&gt;</span> The Ones Who See Things Differently <span className="tilde">~</span> Builders, Traders, Founders, Creators, You!
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
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-headline {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.04em;
          text-align: left;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .separator {
          color: #333;
          margin: 0 10px;
        }

        .tilde {
          color: #666;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 20px;
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
