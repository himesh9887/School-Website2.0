import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { facilities } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function Facilities() {
  return (
    <section className="section-padding bg-alternate">
      <Container>
        <SectionTitle eyebrow="Facilities" title="A clean campus where learning feels focused." subtitle="Classrooms, activity spaces, safety routines, transport support, and supervised school life." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.slice(0, 8).map(({ title, icon: Icon, image, text }) => (
            <Card className="overflow-hidden" key={title}>
              <div className="image-zoom h-44 rounded-b-none">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="p-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary shadow-soft">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            </Card>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button to="/facilities">View All Facilities</Button>
        </div>
      </Container>
    </section>
  );
}
