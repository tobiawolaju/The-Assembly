import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  {
    id: 'learn',
    title: 'Learn',
    subtitle: 'Through Academy',
    color: '#ff3d00',
    description: 'Upskill through structured, hands-on programs. Whether you\'re an outsider or a know-it-all, the Academy gets you building on Base, not just reading about it. Come learn by the best.',
    pattern: 'circles'
  },
  {
    id: 'build',
    title: 'Build',
    subtitle: 'Through Programs',
    color: '#0052ff',
    description: 'Go from learner to shipper real steady. Join our programs and show us what you got. You never know you might get a spot in Base Batches, get into Incubase, and turn your ideas into live onchain products with real users.',
    pattern: 'stars'
  },
  {
    id: 'earn',
    title: 'Earn',
    subtitle: 'Through First Dollar',
    color: '#a855f7',
    description: 'First Dollar is a talent network for Base where proof-of-work is reputation, and skill is the currency. Earn your first dollar onchain. Get matched with paid gigs, bounties, and contributor roles across Base ecosystem projects. You dont have to buy your first dollar you can just earn it.',
    pattern: 'circles'
  },
  {
    id: 'grow',
    title: 'Grow',
    subtitle: 'Through Community',
    color: '#99ff00',
    description: 'At Inner Circle we believe in creating together. Here you are never alone and help will always be given to those who ask for it. You operate permissionless here, give more than you can ever take.',
    pattern: 'stars'
  }
];

const CircleCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="circle-cards-section">
      <div className="container">
        <h2 className="section-title">Be Part Of The Circle</h2>
        <p className="section-subtitle">
          The path is open for everyone, at whatever stage you're in - <br />
          Pick a place and start acting on it.
        </p>

        <div className="cards-grid">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`circle-card ${hoveredCard === card.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: hoveredCard === card.id ? '#fff' : card.color,
                color: hoveredCard === card.id ? '#000' : '#fff'
              }}
            >
              <div className="card-top">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>

              <div className="card-content">
                {hoveredCard === card.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="card-description">{card.description}</p>
                    <button className="know-more-btn">
                      Know More &rarr;
                    </button>
                  </motion.div>
                )}
              </div>

              <div className={`card-pattern ${card.pattern}`}>
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="pattern-element"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .circle-cards-section {
          background-color: #0b0b0b;
          color: #fff;
          padding: 100px 20px;
          text-align: center;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: -0.04em;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #a1a1aa;
          margin-bottom: 60px;
          line-height: 1.4;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          min-height: 550px;
        }

        .circle-card {
          border-radius: 0px;
          padding: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
          text-align: left;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
          min-height:50vh;
        }

        .card-top {
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 8px;
        }

        .card-subtitle {
          font-size: 1.1rem;
          font-weight: 500;
          opacity: 0.8;
        }

        .card-content {
          margin-top: 20px;
          flex-grow: 1;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 24px;
          opacity: 0.8;
        }

        .know-more-btn {
          border: 1px solid #000;
          background: transparent;
          color: #000;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }

        .card-pattern {
          position: absolute;
          bottom: -30px;
          left: 0;
          width: 100%;
          height: 120px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
          padding: 0 10px;
          opacity: 0.2;
        }

        .circles .pattern-element {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid currentColor;
        }

        .stars .pattern-element {
          width: 100%;
          aspect-ratio: 1;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          background-color: currentColor;
        }

        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            min-height: auto;
          }
        }

        @media (max-width: 640px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CircleCards;
