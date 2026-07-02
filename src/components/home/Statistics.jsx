import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { stats } from '../../data/siteData.js';
import { fadeUp, stagger } from '../../utils/animations.js';

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1200, 1);
      setCount(Math.round(value * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <strong ref={ref} className="text-4xl font-black text-primary sm:text-5xl">{count}{suffix}</strong>;
}

export default function Statistics({ full = false }) {
  return (
    <section id="home-stats" className={`section-padding ${full ? 'bg-white' : '-mt-20 relative z-10'}`}>
      <Container>
        {full && <SectionTitle eyebrow="Statistics" title="Numbers that reflect trust." subtitle="A growing learning community with consistent results and strong family satisfaction." />}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => (
            <motion.div variants={fadeUp} className="premium-card p-6 text-center" key={item.label}>
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-3 font-bold text-muted">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
