import React, { useState } from 'react';
import GetSupportModal from './GetSupportModal';

const TopBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="top-bar">
        <nav className="top-bar-nav">
          <button
            className="top-bar-link"
            onClick={() => setModalOpen(true)}
          >
            Get Support
          </button>

          <a
            href="https://lu.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="top-bar-link"
          >
            Events
          </a>
        </nav>
      </header>

      <GetSupportModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style>{`
        .top-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          display: flex;
          justify-content: flex-end;
          padding: 14px 28px;
          background: rgba(0, 0, 0, 0);
          border-bottom:none;
        }

        .top-bar-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .top-bar-link {
          background: none;
          border: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          padding: 7px 14px;
          border-radius: 100px;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em;
          display: inline-flex;
          align-items: center;
        }

        .top-bar-link:hover {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.07);
        }
      `}</style>
    </>
  );
};

export default TopBar;
