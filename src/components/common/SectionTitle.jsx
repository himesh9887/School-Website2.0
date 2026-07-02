import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div
      className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <span className={`inline-flex rounded-full border px-4 py-2 text-xs font-extrabold uppercase ${light ? 'border-white/25 bg-white/15 text-white' : 'border-secondary/15 bg-secondary/10 text-primary'}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-[28px] font-black leading-tight sm:text-[42px] ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-4 text-base leading-8 sm:text-lg ${light ? 'text-white/75' : 'text-muted'}`}>{subtitle}</p>}
      <div className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-secondary ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
