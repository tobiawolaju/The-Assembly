import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users } from 'lucide-react';

const featureData = [
    {
        title: "Academy",
        description: "Master the skills needed to build and lead in the decentralized future. Structured learning paths for every level.",
        icon: <BookOpen size={32} />,
        color: "var(--neon-blue)",
        delay: 0.1
    },
    {
        title: "Bounties",
        description: "Earn by doing. Complete tasks for top protocols and get paid in crypto. Real work, real rewards.",
        icon: <Trophy size={32} />,
        color: "var(--neon-orange)",
        delay: 0.2
    },
    {
        title: "Community",
        description: "Network with the best. Join a global circle of builders, creators, and traders pushing the boundaries.",
        icon: <Users size={32} />,
        color: "var(--neon-purple)",
        delay: 0.3
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    {featureData.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                            className="feature-card glass"
                        >
                            <div className="icon-wrapper" style={{ color: feature.color }}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="card-glow" style={{ background: feature.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .features-section {
          padding: 100px 20px;
          background: var(--bg-color);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .feature-card {
          padding: 40px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
        }

        .icon-wrapper {
          margin-bottom: 24px;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .card-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.05;
          top: -50px;
          right: -50px;
        }

        .feature-card:hover .card-glow {
          opacity: 0.15;
        }
      `}</style>
        </section>
    );
};

export default Features;
