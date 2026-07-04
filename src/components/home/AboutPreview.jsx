import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { values } from '../../data/siteData.js';
import { fadeLeft, fadeRight } from '../../utils/animations.js';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <Container className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionTitle align="left" eyebrow="About Mehar Academy" title="An English medium school for steady, value-based learning." subtitle="Mehar Academy serves Nursery, Primary, and Upper Primary students with strong academics, Urdu as a subject, discipline, safety, and caring guidance." />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {values.map(({ icon: Icon, label }) => (
              <div className="flex min-h-12 items-center gap-3 rounded-2xl border border-border bg-white px-4 font-extrabold text-primary shadow-soft" key={label}>
                <Icon size={19} /> {label}
              </div>
            ))}
          </div>
          <Button to="/about" className="mt-8 w-full sm:w-auto">Read Our Story</Button>
        </motion.div>
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="image-zoom h-[420px] shadow-premium">
            <img src="/mehar-class-corridor.jpeg" alt="Students studying at Mehar Academy" loading="lazy" />
          </div>
          <div className="absolute bottom-5 right-5 max-w-xs rounded-card border border-white/30 bg-white/90 p-5 shadow-premium backdrop-blur-xl">
            <strong className="text-primary">Nursery to Class 8</strong>
            <p className="mt-2 text-sm leading-6 text-muted">English medium education with Urdu as a subject and caring school routines.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
