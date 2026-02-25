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
  },
  {
    id: 5,
    name: "Sarah Chen",
    handle: "@sarah_dev",
    text: "Just launched the beta! The support from the Inner Circle community has been insane. If you're building in public, you need to be here.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    link: "https://twitter.com"
  }
];

const SocialProof = () => {
  return (
    <section className="social-grid-section">
      <div className="container">
        <h2 className="section-title">Wall of Love</h2>
        <div className="masonry-grid">
          {socialPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="social-card-wrapper"
            >
              {/* Blur Overlay */}
              <div className="card-overlay">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                  View on Twitter
                </a>
              </div>

              {/* Main Content */}
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
          background-color: #000;
          padding: 100px 20px;
          min-height: 100vh;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 50px;
          letter-spacing: -0.05em;
        }

        .masonry-grid {
          columns: 3 320px;
          column-gap: 20px;
        }

        .social-card-wrapper {
          position: relative;
          break-inside: avoid;
          margin-bottom: 20px;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          border: 1px solid #222;
          cursor: pointer;
        }

        .social-card {
          padding: 20px;
          transition: filter 0.3s ease;
        }

        /* Hover States */
        .card-overlay {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .social-card-wrapper:hover .social-card {
          filter: blur(8px) brightness(0.5);
        }

        .social-card-wrapper:hover .card-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .view-btn {
          background: #fff;
          color: #000;
          padding: 10px 20px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .social-card-wrapper:hover .view-btn {
          transform: translateY(0);
        }

        /* Twitter Content Styling */
        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .user-info {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #333;
        }

        .user-name {
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          margin: 0;
        }

        .verified {
          color: #1d9bf0;
          font-size: 0.8rem;
          margin-left: 2px;
        }

        .user-handle {
          color: #71767b;
          font-size: 0.85rem;
          margin: 0;
        }

        .twitter-icon {
          color: #71767b;
        }

        .post-text {
          color: #e7e9ea;
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .post-image-container {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #333;
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
