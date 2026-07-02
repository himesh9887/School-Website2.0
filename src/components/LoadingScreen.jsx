import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        className="loader__halo"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="school-logo loader__logo"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>A</span>
      </motion.div>
      <div className="loader__text">
        <strong>Aurora International School</strong>
        <span>Preparing your campus experience</span>
      </div>
      <div className="loader__track">
        <motion.div
          className="loader__progress"
          initial={{ width: '4%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
    </motion.div>
  );
}
