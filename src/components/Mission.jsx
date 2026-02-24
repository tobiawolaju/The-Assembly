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
          <h2 className="section-title">What's Inner Circle?</h2>
          <p className="mission-tagline">
            We're a community of 10,000+ founders, creators, developers, designers, and testers who have each other's backs.
          </p>
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
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
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
