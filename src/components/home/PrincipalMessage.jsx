import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { fadeLeft, fadeRight } from '../../utils/animations.js';

export default function PrincipalMessage() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="image-zoom h-[430px] shadow-premium">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85" alt="Principal of Mehar Academy" loading="lazy" />
        </motion.div>
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="premium-card p-8 lg:p-10">
          <Quote className="text-accent" size={42} />
          <SectionTitle align="left" eyebrow="Principal Message" title="Education should feel ambitious, humane, and beautifully organized." subtitle="At Mehar Academy, we measure success not only through results, but through confidence, kindness, communication, and steady growth." />
          <div className="mt-6">
            <strong className="text-xl font-black">Principal</strong>
            <p className="font-semibold text-muted">Principal, Mehar Academy</p>
            <p className="mt-3 font-['Brush_Script_MT',cursive] text-3xl text-primary">Mehar Academy</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
