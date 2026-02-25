import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mission-content"
        >
          <h2 className="section-title">The Launch Circle</h2>
          <p className="mission-tagline">
            The Launch Circle is a private network for final-year students and recent graduates committed to building before they graduate.
          </p>
          <div className="execution-focus">
            <span>Not networking.</span>
            <span>Not vibes.</span>
            <span className="highlight">Execution.</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 160px 20px;
          background-color: #0b0b0b;
          color: #fff;
          text-align: center;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .mission-tagline {
          font-size: 1.5rem;
          color: #a1a1aa;
          line-height: 1.4;
          max-width: 850px;
          margin: 0 auto 40px;
          font-weight: 400;
        }

        .execution-focus {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .execution-focus .highlight {
          color: #fff;
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 100px 20px;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .mission-tagline {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Mission;
