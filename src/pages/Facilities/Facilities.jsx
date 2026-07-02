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
      <PageBanner eyebrow="Facilities" title="Premium spaces for focus, discovery, and safety." text="Explore technology labs, libraries, studios, sports areas, medical support, transport, and secure campus systems." image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Campus Facilities" title="Every facility has a learning purpose." subtitle="Modern spaces make school days smoother, richer, safer, and more memorable." />
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
