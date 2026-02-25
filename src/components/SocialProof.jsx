import React from 'react';
import { motion } from 'framer-motion';

const socialPosts = [
  {
    id: 1,
    name: "Akhil",
    handle: "@akhil_bvs",
    text: "good to see @callusfbi being mentioned. see y'all in mumbai next year!",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&auto=format",
    avatar: "https://i.pravatar.cc/150?u=akhil",
    link: "https://twitter.com"
  },
  {
    id: 2,
    name: "Aditi",
    handle: "@aditipolkam",
    text: "was so busy shipping things that I forgot to write the day 8 updates, but here we go! 2 major problems we are aiming to solve with our product are building community and scaling fast. 🚀",
    avatar: "https://i.pravatar.cc/150?u=aditi",
    link: "https://twitter.com"
  },
  {
    id: 3,
    name: "Jose Paul | Bitmor",
    handle: "@josepaul_jp",
    text: "this is why you should join Based India Fellowship 4.0 by @BasedIndia & @callusfbi. 3.0 is what made Bitmor DCA possible.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format",
    avatar: "https://i.pravatar.cc/150?u=jose",
    link: "https://twitter.com"
  },
  {
    id: 4,
    name: "razi",
    handle: "@razivity",
    text: "highlight of my 2025 can be summarised with just one hex code. starting w based fellowship in the mountains, that's where i got blue-pilled.",
    avatar: "https://i.pravatar.cc/150?u=razi",
    link: "https://twitter.com"
  }
];

const SocialProof = () => {
  return (
    <section className="social-grid-section">
      <div className="container">
        <h2 className="section-title">28 Operators | 10 Universities | 1 Standard</h2>
        <div className="feed-header">
          <h3>Proof of Execution</h3>
          <p>Members shipping. Members earning. Members building in public.</p>
        </div>
        <div className="masonry-grid">
          {socialPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="social-card-wrapper"
            >
              {/* Overlay with Blur Trigger */}
              <div className="card-overlay">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View on Twitter
                </a>
              </div>

              {/* Main White Card Content */}
              <div className="social-card">
                <div className="card-header">
                  <div className="user-info">
                    <img src={post.avatar} alt={post.name} className="avatar" />
                    <div className="user-meta">
                      <p className="user-name">{post.name} <span className="verified">✓</span></p>
                      <p className="user-handle">{post.handle}</p>
                    </div>
                  </div>
                  <div className="twitter-icon">
                    <svg viewBox="0 0 24 24" width="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  </div>
                </div>

                <div className="card-body">
                  <p className="post-text">{post.text}</p>
                  {post.image && (
                    <div className="post-image-container">
                      <img src={post.image} alt="post content" className="post-image" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-grid-section {
          background-color: #080808; /* Dark section background to make cards pop */
          padding: 80px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 20px;
          letter-spacing: -0.04em;
        }

        .feed-header {
          text-align: center;
          margin-bottom: 50px;
          color: #666;
        }

        .feed-header h3 {
          color: #fff;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .masonry-grid {
          columns: 3 320px;
          column-gap: 20px;
        }

        .social-card-wrapper {
          position: relative;
          break-inside: avoid;
          margin-bottom: 20px;
          border-radius: 0px;
          overflow: hidden;
          background: #ffffff; /* Pure White Card */
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .social-card {
          padding: 24px;
          transition: filter 0.3s ease;
        }

        /* Interaction Logic */
        .card-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .social-card-wrapper:hover .social-card {
          filter: blur(6px) grayscale(0.5);
        }

        .social-card-wrapper:hover .card-overlay {
          opacity: 1;
          pointer-events: auto;
          backdrop-filter: blur(2px);
        }

        .view-btn {
          background: #000;
          color: #fff;
          padding: 12px 24px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-card-wrapper:hover .view-btn {
          transform: translateY(0);
        }

        /* Typography & Header Styling */
        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .user-info {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #f0f0f0;
        }

        .user-name {
          color: #000;
          font-weight: 750;
          font-size: 1rem;
          margin: 0;
        }

        .verified {
          color: #1d9bf0;
          font-size: 0.85rem;
          margin-left: 2px;
        }

        .user-handle {
          color: #536471;
          font-size: 0.9rem;
          margin: 0;
        }

        .twitter-icon {
          color: #cfd9de;
        }

        .post-text {
          color: #0f1419;
          font-size: 1.05rem;
          line-height: 1.5;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .post-image-container {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #eff3f4;
        }

        .post-image {
          width: 100%;
          display: block;
        }

        @media (max-width: 768px) {
          .masonry-grid {
            columns: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
