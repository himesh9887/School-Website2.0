import { motion } from 'framer-motion';
import Card from '../../components/common/Card.jsx';
import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import Button from '../../components/common/Button.jsx';
import { downloads, programs } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function Academics() {
  const methods = ['Teaching Methodology', 'Smart Classes', 'Assessment', 'Extra Activities'];
  return (
    <>
      <PageBanner eyebrow="Academics" title="Rigorous learning with modern pedagogy." text="From nursery foundations to secondary specialization, our academic model is clear, supportive, and future-oriented." image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Programs" title="Academic programs for every stage." subtitle="Each pathway is designed with clear milestones, mentorship, and age-appropriate independence." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          <SectionTitle align="left" eyebrow="Methodology" title="Learning is active, assessed, and beautifully supported." subtitle="Teachers use concept maps, practice cycles, project work, reflection journals, and focused feedback to help students grow." />
          <div className="grid gap-5 sm:grid-cols-2">
            {methods.map((item) => (
              <article className="premium-card premium-card-hover p-6" key={item}>
                <h2 className="text-xl font-black">{item}</h2>
                <p className="mt-3 leading-7 text-muted">Structured systems, modern resources, and mentor feedback help students build confidence and mastery.</p>
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
