import React from 'react';
import { motion } from 'framer-motion';

const brandingText = "INNERCIRCLE ";

const Branding = () => {
  return (
    <section className="branding-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">The Signal</h2>
          <p className="cta-subtitle">Weekly leverage for students building before graduation.</p>
          <button className="subscribe-btn">
            Get The Signal →
          </button>
        </div>

      </div>

      <div className="large-branding-wrapper">
        <div className="massive-text">
          {"DON’T GRADUATE UNPOSITIONED"}
        </div>
      </div>

      <style jsx>{`
        .branding-section {
          background-color: #fff;
          color: #000;
          padding: 80px 0 0;
          position: relative;
          overflow: hidden;
        }

        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15vh;
        }

        .cta-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .subscribe-btn {
          background-color: #6200ffff;
          color: #fff;
          padding: 18px 36px;
          border-radius: 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .subscribe-btn:hover {
          transform: scale(1.05);
        }

        .social-label {
          font-weight: 700;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .socials {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: right;
        }

        .social-link {
          color: #666;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.2s;
        }

        .social-link:hover {
          color: #000;
        }

        .large-branding-wrapper {
          background-color: #6200ffff;
          width: 100%;
          padding: 40px 0;
          display: flex;
          white-space: wrap;
          height:auto;
        }

        .massive-text {
          font-size: 25vw;
          font-weight: 900;
          color: #fff;
          line-height: 0.8;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .cta-container {
            flex-direction: column;
            gap: 40px;
          }
          .cta-title {
            font-size: 2.5rem;
          }
          .socials {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Branding;
