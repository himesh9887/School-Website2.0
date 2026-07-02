import { motion } from 'framer-motion';

export default function SectionHeader({ kicker, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      className={`section-header ${align === 'left' ? 'left' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="decorative-line" aria-hidden="true" />
    </motion.div>
  );
}
