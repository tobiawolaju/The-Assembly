import React from 'react';
import { motion } from 'framer-motion';

const brandingText = "INNERCIRCLE ";

const Branding = () => {
    return (
        <section className="branding-section">
            <div className="cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">Subscribe To<br />The Signal.</h2>
                    <button className="subscribe-btn">
                        Subscribe Now &rarr;
                    </button>
                </div>
                <div className="socials">
                    <p className="social-label">Socials</p>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Join Community</a>
                </div>
            </div>

            <div className="large-branding-wrapper">
                <div className="massive-text">
                    {brandingText.repeat(5)}
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
          font-size: 3.5rem;
          line-height: 1;
          font-weight: 700;
          margin-bottom: 40px;
          letter-spacing: -0.04em;
        }

        .subscribe-btn {
          background-color: #0047ff;
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
          background-color: #0047ff;
          width: 100%;
          padding: 40px 0;
          display: flex;
          white-space: nowrap;
        }

        .massive-text {
          font-size: 18vw;
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
