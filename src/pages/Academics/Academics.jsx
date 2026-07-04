import { motion } from 'framer-motion';
import Card from '../../components/common/Card.jsx';
import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import Button from '../../components/common/Button.jsx';
import { downloads, programs } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function Academics() {
  const methods = ['English Medium Teaching', 'Urdu Subject', 'Regular Assessment', 'Extra Activities'];
  return (
    <>
      <PageBanner eyebrow="Academics" title="Nursery, Primary and Upper Primary learning." text="From early foundations to Class 8 readiness, Mehar Academy provides English medium education with Urdu as an important subject." image="/mehar-classroom.jpeg" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Programs" title="Academic programs from Nursery to Class 8." subtitle="Each wing has age-appropriate learning, discipline, practice, and activity-based development." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
            {programs.map(({ title, icon: Icon, text }) => (
              <Card className="p-7" key={title}>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-royal text-white"><Icon size={26} /></div>
                <h2 className="mt-6 text-2xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <SectionTitle align="left" eyebrow="Methodology" title="Learning is clear, active, and regularly checked." subtitle="Teachers use explanation, reading, writing practice, oral work, homework, activities, and parent communication to help students improve." />
          <div className="grid gap-5 sm:grid-cols-2">
            {methods.map((item) => (
              <article className="premium-card premium-card-hover p-6" key={item}>
                <h2 className="text-xl font-black">{item}</h2>
                <p className="mt-3 leading-7 text-muted">Structured classroom routines and teacher guidance help students build confidence, discipline, and subject understanding.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-padding bg-alternate">
        <Container>
          <SectionTitle eyebrow="Downloads" title="Helpful academic documents." subtitle="Access key information for planning the school year and admission process." />
          <div className="grid gap-5 md:grid-cols-3">
            {downloads.map(({ label, icon: Icon }) => (
              <article className="premium-card flex items-center justify-between gap-4 p-6" key={label}>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary shadow-soft"><Icon size={22} /></span>
                  <strong>{label}</strong>
                </div>
                <Button variant="secondary" icon={false}>Download</Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
