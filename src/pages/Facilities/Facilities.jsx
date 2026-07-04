import { motion } from 'framer-motion';
import Card from '../../components/common/Card.jsx';
import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import { facilities } from '../../data/siteData.js';
import { stagger } from '../../utils/animations.js';

export default function Facilities() {
  return (
    <>
      <PageBanner eyebrow="Facilities" title="Clean spaces for study, activity, and safety." text="Explore Mehar Academy classrooms, campus areas, activity learning, transport support, and supervised school routines." image="/mehar-campus-collage.jpeg" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Campus Facilities" title="Every facility supports daily school life." subtitle="Classrooms, campus supervision, activities, and support systems keep school days focused and safe." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ title, icon: Icon, image, text, category }) => (
              <Card className="overflow-hidden" key={title}>
                <div className="image-zoom h-56 rounded-b-none"><img src={image} alt={title} loading="lazy" /></div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-alternate text-primary"><Icon size={22} /></span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-extrabold text-accent">{category}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black">{title}</h2>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </div>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
