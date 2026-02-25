import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-text">
            <h2>Interested but not yet qualified?</h2>
            <p>Stay informed on emerging technologies shaping the future of how we live and build.</p>
            <p className="sub-text">Subscribe to the newsletter.</p>
          </div>
          
          <div className="newsletter-cta">
            <h3 className="signal-title">Subscribe to The Signal</h3>
            <p className="stay-ahead">Stay ahead.</p>
            <div className="input-group">
              <input type="email" placeholder="email@address.com" className="email-input" />
              <button className="subscribe-btn">
                Subscribe Now <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Brand and Links Section */}
        <div className="footer-bottom-grid">
          <div className="brand-col">
            <h1 className="footer-logo">INNERCIRCLE</h1>
            <p className="tagline">The cracked home for cracked talent.</p>
          </div>

          <div className="links-col">
            <div className="social-links">
              <a href="#">Connect X</a>
              <a href="#">LinkedIn</a>
              <a href="#">Substack</a>
            </div>
            <div className="legal-links">
              <p>&copy; {new Date().getFullYear()} Inner Circle. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: #000;
          color: #fff;
          padding: 100px 20px 60px;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Newsletter Styling */
        .newsletter-section {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
          align-items: center;
        }

        .newsletter-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }

        .newsletter-text p {
          color: #888;
          font-size: 1.1rem;
          line-height: 1.5;
          max-width: 450px;
        }

        .sub-text {
          margin-top: 10px;
          color: #fff !important;
          font-weight: 500;
        }

        .signal-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .stay-ahead {
          color: #666;
          margin-bottom: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .email-input {
          background: #111;
          border: 1px solid #222;
          padding: 16px;
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .email-input:focus {
          border-color: #444;
        }

        .subscribe-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 16px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s;
        }

        .subscribe-btn:hover {
          transform: translateY(-2px);
          background: #f0f0f0;
        }

        .divider {
          height: 1px;
          background: #222;
          margin-bottom: 60px;
        }

        /* Footer Bottom */
        .footer-bottom-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 40px;
        }

        .footer-logo {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 0.8;
          margin: 0 0 10px 0;
        }

        .tagline {
          color: #555;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .social-links {
          display: flex;
          gap: 24px;
          margin-bottom: 20px;
        }

        .social-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .social-links a:hover {
          color: #888;
        }

        .legal-links p {
          color: #444;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .newsletter-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-logo {
            font-size: 3rem;
          }
          .footer-bottom-grid {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
