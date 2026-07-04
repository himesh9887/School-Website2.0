import { motion } from 'framer-motion';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import CTA from '../../components/home/CTA.jsx';
import { school, timeline, values } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function About() {
  return (
    <>
      <PageBanner eyebrow="About Mehar Academy" title="English medium education with discipline and care." text="Mehar Academy serves Nursery, Primary, and Upper Primary students up to Class 8 with Urdu as an important subject." image="/mehar-hero.jpeg" />
      <section className="section-padding bg-background">
        <Container className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <SectionTitle align="left" eyebrow="Introduction" title="Built around strong basics, values, and regular guidance." subtitle={`Under the leadership of ${school.headmaster}, Mehar Academy supports children with English medium learning, Urdu subject teaching, discipline, and personal attention.`} />
            <Button to="/admissions">Begin Admissions</Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {['Vision', 'Mission', 'History', 'Achievements'].map((title, index) => (
              <article className="premium-card premium-card-hover p-6" key={title}>
                <h2 className="text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-muted">
                  {[
                    'To nurture confident learners with strong basics, good manners, clear communication, and responsible habits.',
                    'To provide English medium education from Nursery to Class 8 with Urdu as an important subject and value-based learning.',
                    'Established in 2015, Mehar Academy has grown as a local school community for young learners.',
                    'Daily discipline, classroom activity, parent trust, and steady academic progress.',
                  ][index]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle eyebrow="Core Values" title="Values that shape daily behavior." subtitle="We make values visible through classroom routines, respectful conduct, regular practice, and school activities." />
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
            ['Management Message', 'Mehar Academy is built around teaching quality, discipline, care, and safety. Every decision is made with long-term student growth in mind.', 'Management'],
            ['Headmaster Message', 'Our classrooms focus on clear explanation, regular practice, participation, and values. Students grow in academics, confidence, and character.', school.headmaster],
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
          <SectionTitle eyebrow="Journey" title="Mehar Academy through the years." subtitle="A timeline of steady school growth from foundation to Nursery, Primary, and Upper Primary education." />
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
