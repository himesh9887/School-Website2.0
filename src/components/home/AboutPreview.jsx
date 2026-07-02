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
          <SectionTitle align="left" eyebrow="About Aurora" title="A school built for calm excellence and courageous curiosity." subtitle="Aurora blends rigorous academics with creative studios, sports, global perspectives, wellbeing systems, and meaningful mentorship." />
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
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85" alt="Students collaborating outdoors" loading="lazy" />
          </div>
          <div className="absolute bottom-5 right-5 max-w-xs rounded-card border border-white/30 bg-white/90 p-5 shadow-premium backdrop-blur-xl">
            <strong className="text-primary">97% parent satisfaction</strong>
            <p className="mt-2 text-sm leading-6 text-muted">Families value our communication, mentoring, and safe campus culture.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
