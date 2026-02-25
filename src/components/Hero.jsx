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
    [0, 0.4, 0.5, 0.6, 1],
    ["#ffffff", "#d966ff", "#bf00ff", "#d966ff", "#ffffff"]
  );

  // Raw scale transformation
  const targetScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [1, 1.2, 1.5, 1.2, 1]
  );

  // Raw opacity transformation
  const targetOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0.5, 0.75, 1, 0.75, 0.5]
  );

  // Use springs for smoother, more fluid motion
  const springConfig = { stiffness: 50, damping: 20, restDelta: 0.001 };
  const color = useSpring(targetColor, springConfig);
  const scale = useSpring(targetScale, springConfig);
  const opacity = useSpring(targetOpacity, springConfig);

  return (
    <motion.span
      ref={ref}
      style={{
        color,
        scale,
        opacity,
        display: "inline-block",
        transformOrigin: "center center"
      }}
      whileHover={{
        color: "#bf00ff",
        scale: 1.5,
        opacity: 1,
        transition: { duration: 0.3 }
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
          <ScrollHighlightWord>Builders</ScrollHighlightWord> <br />{" "}
          <ScrollHighlightWord>Developers</ScrollHighlightWord> <br />{" "}
          <ScrollHighlightWord>Designers</ScrollHighlightWord> <br />{" "}
          <ScrollHighlightWord>Student founders</ScrollHighlightWord> <br />
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
