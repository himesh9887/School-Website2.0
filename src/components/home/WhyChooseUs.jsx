import { motion } from 'framer-motion';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { whyChoose } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle eyebrow="Why Choose Us" title="Designed for modern families and ambitious learners." subtitle="A school experience that is structured, warm, focused, and deeply student-centered." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ title, icon: Icon, text }) => (
            <Card className="p-6" key={title}>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-alternate text-primary">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
