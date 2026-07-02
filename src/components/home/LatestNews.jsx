import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { newsItems } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function LatestNews() {
  return (
    <section className="section-padding bg-alternate">
      <Container>
        <SectionTitle eyebrow="Latest News" title="Announcements, achievements, and school life." subtitle="Stay connected with admissions updates, events, awards, and important notices." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
          {newsItems.slice(0, 3).map(({ title, date, category, icon: Icon, text }) => (
            <Card className="p-6" key={title}>
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary shadow-soft"><Icon size={22} /></div>
                <span className="rounded-full bg-accent/12 px-3 py-1 text-xs font-extrabold text-accent">{category}</span>
              </div>
              <p className="mt-5 text-sm font-bold text-muted">{date}</p>
              <h3 className="mt-2 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </Card>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button to="/news">Read All Updates</Button>
        </div>
      </Container>
    </section>
  );
}
