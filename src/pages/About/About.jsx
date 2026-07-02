import { motion } from 'framer-motion';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import CTA from '../../components/home/CTA.jsx';
import { timeline, values } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function About() {
  return (
    <>
      <PageBanner eyebrow="About Aurora" title="A premium school with a deeply human center." text="Discover our history, mission, leadership, values, achievements, and future-ready learning culture." image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <SectionTitle align="left" eyebrow="Introduction" title="Built around mentorship, mastery, and meaningful participation." subtitle="Aurora International School was created for families who want strong academics without losing warmth, creativity, safety, and individual attention." />
            <Button to="/admissions">Begin Admissions</Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {['Vision', 'Mission', 'History', 'Achievements'].map((title, index) => (
              <article className="premium-card premium-card-hover p-6" key={title}>
                <h2 className="text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-muted">
                  {[
                    'To nurture confident learners who think clearly, communicate beautifully, and lead ethically.',
                    'To combine rigorous academics, wellbeing, arts, sport, technology, and community service.',
                    'Founded in 2008, Aurora has grown into a trusted school community with modern infrastructure.',
                    'Consistent board results, innovation awards, sports titles, and strong university placements.',
                  ][index]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle eyebrow="Core Values" title="Values that shape daily behavior." subtitle="We make values visible through routines, reflection, assemblies, leadership roles, and service learning." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, label }) => (
              <Card className="p-7 text-center" key={label}>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-alternate text-primary"><Icon size={26} /></div>
                <h3 className="mt-5 text-xl font-black">{label}</h3>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>
      <section className="section-padding bg-alternate">
        <Container className="grid gap-10 lg:grid-cols-2">
          {[
            ['Chairman Message', 'We envisioned Aurora as a school where infrastructure, teaching quality, and emotional safety work together. Every decision is made with long-term student growth in mind.', 'Rajiv Malhotra'],
            ['Principal Message', 'Our classrooms are designed for clarity, participation, feedback, and reflection. Students leave Aurora ready for exams, but also ready for life.', 'Dr. Meera Kapoor'],
          ].map(([title, text, name]) => (
            <article className="premium-card p-8" key={title}>
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-5 leading-8 text-muted">"{text}"</p>
              <strong className="mt-6 block text-primary">{name}</strong>
            </article>
          ))}
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle eyebrow="Journey" title="Aurora through the years." subtitle="A thoughtful timeline of growth, investment, and educational evolution." />
          <div className="grid gap-5 lg:grid-cols-4">
            {timeline.map((item) => (
              <article className="premium-card premium-card-hover p-6" key={item.year}>
                <span className="text-3xl font-black text-primary">{item.year}</span>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
