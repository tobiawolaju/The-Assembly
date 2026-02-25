import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollHighlightWord = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  // Map the scroll progress to a color transition (white -> purple -> white)
  // peak purple at the middle of the offset range
  const color = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    ["#ffffff", "#ffffff", "rgba(172, 47, 255, 1)", "#ffffff", "#ffffff"]
  );

  return (
    <motion.span
      ref={ref}
      style={{ color }}
      whileHover={{ color: "rgba(172, 47, 255, 1)" }}
      transition={{ duration: 0.2 }}
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
