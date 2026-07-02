import { motion } from 'framer-motion';
import Container from './Container.jsx';

export default function PageBanner({ eyebrow, title, text, image }) {
  return (
    <section className="relative isolate min-h-[430px] overflow-hidden pt-36 text-white sm:min-h-[500px]">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover" src={image} alt="" loading="eager" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,.82),rgba(30,64,175,.52),rgba(15,23,42,.28))]" />
      <Container className="pb-20 pt-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-extrabold uppercase backdrop-blur-xl">{eyebrow}</span>
          <h1 className="mt-5 text-[34px] font-black leading-tight sm:text-[60px]">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{text}</p>
        </motion.div>
      </Container>
    </section>
  );
}
