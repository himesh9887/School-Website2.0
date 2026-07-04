import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { school } from '../../data/siteData.js';
import { fadeLeft, fadeRight } from '../../utils/animations.js';
import headmasterImage from '../../assets/images/headmaster.jpeg';

export default function PrincipalMessage() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="image-zoom h-[430px] shadow-premium">
          <img src={headmasterImage} alt={`${school.headmaster}, Headmaster of Mehar Academy`} loading="lazy" />
        </motion.div>
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="premium-card p-8 lg:p-10">
          <Quote className="text-accent" size={42} />
          <SectionTitle align="left" eyebrow="Headmaster Message" title="Education should build discipline, confidence, and strong basics." subtitle="At Mehar Academy, we provide English medium learning from Nursery to Class 8 with Urdu as an important subject, caring guidance, and regular practice." />
          <div className="mt-6">
            <strong className="text-xl font-black">{school.headmaster}</strong>
            <p className="font-semibold text-muted">Headmaster, Mehar Academy</p>
            <p className="mt-3 font-['Brush_Script_MT',cursive] text-3xl text-primary">{school.name}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
