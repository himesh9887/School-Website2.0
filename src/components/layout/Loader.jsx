import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { school } from '../../data/siteData.js';

const loadingMessages = [
  'Preparing Excellence...',
  'Loading Learning Experience...',
  'Building Your Future...',
  'Please Wait...',
];

const particles = [
  { x: '10%', y: '18%', size: 4, delay: 0.1, duration: 7 },
  { x: '18%', y: '72%', size: 3, delay: 1.1, duration: 8 },
  { x: '30%', y: '28%', size: 5, delay: 0.5, duration: 9 },
  { x: '42%', y: '82%', size: 3, delay: 1.7, duration: 7.5 },
  { x: '58%', y: '20%', size: 4, delay: 0.8, duration: 8.5 },
  { x: '70%', y: '76%', size: 5, delay: 1.4, duration: 9 },
  { x: '83%', y: '30%', size: 3, delay: 0.3, duration: 7.2 },
  { x: '91%', y: '62%', size: 4, delay: 1.9, duration: 8.2 },
];

export default function Loader() {
  const [messageIndex, setMessageIndex] = useState(0);
  const particleList = useMemo(() => particles, []);

  useEffect(() => {
    const messageTimer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % loadingMessages.length);
    }, 2000);

    return () => window.clearInterval(messageTimer);
  }, []);

  return (
    <motion.section
      className="luxury-loader"
      aria-label="Loading Mehar Academy"
      initial={{ opacity: 0, filter: 'blur(18px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.025, filter: 'blur(14px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="luxury-loader__gradient" />
      <div className="luxury-loader__mesh luxury-loader__mesh--one" />
      <div className="luxury-loader__mesh luxury-loader__mesh--two" />
      <div className="luxury-loader__mesh luxury-loader__mesh--three" />
      <div className="luxury-loader__grid" />

      {particleList.map((particle, index) => (
        <motion.span
          className="luxury-loader__particle"
          key={`${particle.x}-${particle.y}`}
          style={{ left: particle.x, top: particle.y, width: particle.size, height: particle.size }}
          initial={{ opacity: 0, y: 10, scale: 0.7 }}
          animate={{
            opacity: [0.12, 0.72, 0.18],
            y: [-8, 10, -8],
            scale: [0.85, 1.25, 0.85],
          }}
          transition={{ duration: particle.duration, delay: particle.delay + index * 0.08, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="luxury-loader__content"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 0.9 }}
      >
        <motion.div
          className="luxury-loader__logo-shell"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="luxury-loader__logo-border" />
          <motion.div
            className="luxury-loader__logo-card"
            initial={{ opacity: 0, scale: 0.82, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ scale: 1.08, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 130, damping: 16, delay: 0.15 }}
          >
            <img src={school.logo} alt={`${school.name} logo`} />
          </motion.div>
        </motion.div>

        <motion.div
          className="luxury-loader__copy"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="luxury-loader__eyebrow">Official School Experience</p>
          <h1>{school.name}</h1>
          <AnimatePresence mode="wait">
            <motion.p
              className="luxury-loader__message"
              key={loadingMessages[messageIndex]}
              initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {loadingMessages[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="luxury-loader__progress"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
        >
          <motion.div
            className="luxury-loader__progress-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4.05, ease: [0.65, 0, 0.35, 1] }}
          />
          <span className="luxury-loader__progress-shine" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
