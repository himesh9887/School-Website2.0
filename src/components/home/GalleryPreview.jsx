import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { galleryItems } from '../../data/siteData.js';
import { fadeUp, stagger } from '../../utils/animations.js';

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle eyebrow="Gallery" title="Campus moments with energy and intention." subtitle="A quick look at classrooms, events, sports, labs, and everyday student life." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryItems.slice(0, 5).map((item, index) => (
            <motion.div variants={fadeUp} className={`group image-zoom relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`} key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/70 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                <div>
                  <span className="text-xs font-extrabold uppercase text-accent">{item.category}</span>
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button to="/gallery">View More Photos</Button>
        </div>
      </Container>
    </section>
  );
}
