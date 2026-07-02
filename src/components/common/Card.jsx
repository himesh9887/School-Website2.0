import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations.js';

export default function Card({ children, className = '' }) {
  return (
    <motion.article variants={fadeUp} className={`premium-card premium-card-hover ${className}`}>
      {children}
    </motion.article>
  );
}
