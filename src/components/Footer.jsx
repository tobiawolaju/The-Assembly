import React from 'react';
import { Twitter, Send, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Inner Circle.</h3>
            <p>The cracked home for cracked talent.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <a href="#">Academy</a>
              <a href="#">Bounties</a>
              <a href="#">Telegram Bot</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

          <div className="footer-social">
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Send size={20} /></a>
            <a href="#" className="social-icon"><Github size={20} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Inner Circle. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          padding: 80px 20px 40px;
          border-top: 1px solid var(--glass-border);
          background: var(--bg-color);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-info h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .footer-info p {
          color: var(--text-secondary);
        }

        .footer-links {
          display: flex;
          gap: 60px;
        }

        .link-group h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .link-group a {
          display: block;
          color: var(--text-secondary);
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.2s;
          font-size: 0.95rem;
        }

        .link-group a:hover {
          color: var(--neon-blue);
        }

        .footer-social {
          display: flex;
          gap: 20px;
          justify-content: flex-end;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .social-icon:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links {
            flex-direction: column;
            gap: 40px;
          }
          .footer-social {
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
