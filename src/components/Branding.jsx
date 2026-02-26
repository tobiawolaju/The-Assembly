import React from 'react';
import { motion } from 'framer-motion';

const Branding = () => {
  return (
    <section className="branding-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">The Signal</h2>
          <p className="cta-subtitle">
            Weekly leverage for students building before graduation.
          </p>

          <a
            href="https://your-substack-url.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="substack-btn"
          >
            <svg
              className="substack-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 3h18v4H3V3zm0 6h18v2H3V9zm0 4h18v8l-9-4-9 4v-8z"
                fill="currentColor"
              />
            </svg>
            Subscribe on Substack
          </a>
        </div>
      </div>

      <div className="large-branding-wrapper">
        <div className="massive-text">
          {"-.. --- -. .----. -   --. .-. .- -.. ..- .- - .   ..- -. .--. --- ... .. - .. --- -. . -.."}
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

        /* Substack Button */
        .substack-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: #FF6719; /* Substack orange */
          color: #ffffff;
          padding: 18px 36px;
          border-radius: 40px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .substack-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .substack-icon {
          width: 22px;
          height: 22px;
        }

        .large-branding-wrapper {
          background-color: #e4d3ff;
          width: 100%;
          padding: 40px 0;
          display: flex;
          white-space: wrap;
          height: auto;
        }

        .massive-text {
          font-size: 15vw;
          font-weight: 900;
          color: #7700ff;
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
        }
      `}</style>
    </section>
  );
};

export default Branding;