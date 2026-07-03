import { motion } from 'framer-motion';
import { school } from '../data/siteData.js';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#FFFBEB_0%,#F7E8B8_34%,#0B4A2A_35%,#052E1A_100%)] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(5,46,26,0),rgba(5,46,26,.95))]" />
      <motion.div
        className="absolute h-[360px] w-[360px] rounded-full border border-[#D8AC53]/35 border-t-white/80 shadow-[inset_0_0_70px_rgba(216,172,83,.24),0_0_70px_rgba(5,46,26,.3)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative z-10 grid justify-items-center gap-6 px-6 text-center">
        <motion.div
          className="grid h-32 w-32 place-items-center overflow-hidden rounded-full border-[6px] border-white bg-[#FFFDF5] p-2 shadow-[0_22px_70px_rgba(0,0,0,.32),0_0_0_10px_rgba(216,172,83,.24)] sm:h-36 sm:w-36"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <img className="h-full w-full object-contain" src={school.logo} alt={`${school.name} logo`} />
        </motion.div>
        <div>
          <strong className="text-2xl font-black tracking-wide text-white drop-shadow sm:text-3xl">{school.name}</strong>
          <p className="mt-2 text-sm font-semibold text-[#F7E8B8]">Learn. Grow. Succeed.</p>
        </div>
        <div className="h-2 w-72 max-w-[78vw] overflow-hidden rounded-full bg-white/20 shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#D8AC53] via-white to-[#42A83D]"
            initial={{ width: '4%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
