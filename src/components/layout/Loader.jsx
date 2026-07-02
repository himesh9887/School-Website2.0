import { motion } from 'framer-motion';
import { school } from '../../data/siteData.js';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[linear-gradient(135deg,#0F172A,#1E40AF)] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        className="absolute h-[320px] w-[320px] rounded-full border border-white/15 border-t-accent shadow-[inset_0_0_60px_rgba(37,99,235,.35)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative z-10 grid justify-items-center gap-6">
        <motion.div
          className="grid h-24 w-24 place-items-center rounded-[28px] border border-white/30 bg-royal shadow-premium"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-5xl font-black">A</span>
        </motion.div>
        <div className="text-center">
          <strong className="text-xl font-black sm:text-2xl">{school.name}</strong>
          <p className="mt-2 text-sm text-white/70">Preparing your premium school experience</p>
        </div>
        <div className="h-2 w-72 overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent via-white to-success"
            initial={{ width: '4%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.45, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
