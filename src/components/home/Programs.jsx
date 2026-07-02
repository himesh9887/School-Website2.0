import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { programs } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function Programs() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle eyebrow="Academic Programs" title="Purposeful pathways from nursery to secondary." subtitle="Every stage has the right balance of care, rigor, exploration, and independence." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ title, icon: Icon, text }) => (
            <Card className="p-6" key={title}>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-royal text-white shadow-glow">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </Card>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button to="/academics">Explore Academics</Button>
        </div>
      </Container>
    </section>
  );
}
