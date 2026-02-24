import React from 'react';
import { motion } from 'framer-motion';

const socialPosts = [
  {
    id: 1,
    name: "Akhil",
    handle: "@akhil_bvs",
    text: "good to see @callusfbi being mentioned. see y'all in mumbai next year!",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&h=300&fit=crop",
    avatar: "https://i.pravatar.cc/150?u=akhil"
  },
  {
    id: 2,
    name: "Aditi",
    handle: "@aditipolkam",
    text: "was so busy shipping things that I forgot to write the day 8 updates, but here we go! 2 major problems we are aiming to solve with our product are...",
    avatar: "https://i.pravatar.cc/150?u=aditi"
  },
  {
    id: 3,
    name: "Jose Paul | Bitmor",
    handle: "@josepaul_jp",
    text: "this is why you should join Based India Fellowship 4.0 by @BasedIndia & @callusfbi. 3.0 is what made Bitmor DCA possible and took me to Base Camp in Vermont, US.",
    video: true,
    avatar: "https://i.pravatar.cc/150?u=jose"
  },
  {
    id: 4,
    name: "razi",
    handle: "@razivity",
    text: "highlight of my 2025 can be summarised with just one hex code. starting w based fellowship in the mountains, that's where i got blue-pilled.",
    avatar: "https://i.pravatar.cc/150?u=razi"
  }
];

const SocialProof = () => {
  return (
    <section className="social-grid-section">
      <div className="container">
        <div className="masonry-grid">
          {socialPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="social-card"
            >
              <div className="card-header">
                <div className="user-info">
                  <img src={post.avatar} alt={post.name} className="avatar" />
                  <div>
                    <p className="user-name">{post.name} ✅</p>
                    <p className="user-handle">{post.handle}</p>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="post-text">{post.text}</p>
                {post.image && <img src={post.image} alt="post content" className="post-image" />}
                {post.video && (
                  <div className="post-video-placeholder">
                    <span className="play-icon">▶</span>
                    <p className="video-title">Bitmor</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-grid-section {
          background-color: #000;
          padding: 60px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          align-items: start;
        }

        .social-card {
          background-color: #fff;
          color: #000;
          border-radius: 0px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .user-info {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .user-name {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .user-handle {
          color: #666;
          font-size: 0.85rem;
        }

        .post-text {
          font-size: 1rem;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .post-image {
          width: 100%;
          border-radius: 8px;
          margin-top: 8px;
        }

        .post-video-placeholder {
          width: 100%;
          aspect-ratio: 16/9;
          background-color: #000;
          border-radius: 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          gap: 10px;
        }

        .play-icon {
          font-size: 2rem;
        }

        .video-title {
          font-weight: 900;
          font-size: 2.5rem;
          color: #ffffffff;
          letter-spacing: -2px;
        }

      

        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
