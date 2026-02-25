import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollHighlightWord = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"] // Wider range for longer duration
  });

  // Raw color transformation
  const targetColor = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 0.55, 1],
    ["#ffffff", "#ffffff", "rgba(172, 47, 255, 1)", "#ffffff", "#ffffff"]
  );

  // Raw scale transformation
  const targetScale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 0.55, 1],
    [1, 1, 1.15, 1, 1]
  );

  // Use springs for smoother, more fluid motion
  const springConfig = { stiffness: 50, damping: 20, restDelta: 0.001 };
  const color = useSpring(targetColor, springConfig);
  const scale = useSpring(targetScale, springConfig);

  return (
    <motion.span
      ref={ref}
      style={{
        color,
        scale,
        display: "inline-block",
        transformOrigin: "center center"
      }}
      whileHover={{
        color: "rgba(172, 47, 255, 1)",
        scale: 1.15,
        transition: { duration: 0.2 }
      }}
      className="hover-word"
    >
      {children}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-headline"
        >
          <ScrollHighlightWord>Builders</ScrollHighlightWord>.{" "}
          <ScrollHighlightWord>Developers</ScrollHighlightWord>.{" "}
          <ScrollHighlightWord>Designers</ScrollHighlightWord>.{" "}
          <ScrollHighlightWord>Student founders</ScrollHighlightWord> — <br />
          primarily building within the Monad ecosystem.
        </motion.h1>
      </div>

      <style jsx>{`
        .hero-section {
          background-color: #000;
          color: #fff;
          padding: 120px 20px 60px;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          margin: 0 auto;
        }

        .hero-headline {
          max-width: 80vw;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.04em;
          text-align: left;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .hover-word {
          cursor: crosshair;
          display: inline-block;
        }

        .separator {
          color: #333;
          margin: 0px;
        }

        .tilde {
          color: #666;
        }

        @media (max-width: 768px) {
          .hero-section {
            max-width: 80vw;
            scale: 0.9;
          }
          .hero-headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
