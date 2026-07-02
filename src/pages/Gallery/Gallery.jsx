import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useMemo, useState } from 'react';
import Button from '../../components/common/Button.jsx';
import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import { galleryItems } from '../../data/siteData.js';

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [active, setActive] = useState(null);
  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];
  const filtered = useMemo(() => (category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)), [category]);

  return (
    <>
      <PageBanner eyebrow="Gallery" title="A visual story of campus life." text="Filter photos by events, sports, classrooms, campus, and everyday learning moments." image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Gallery Filter" title="Explore moments by category." subtitle="Hover for captions or open a larger preview." />
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((item) => (
              <Button icon={false} variant={item === category ? 'primary' : 'secondary'} onClick={() => setCategory(item)} key={item}>{item}</Button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {filtered.map((item) => (
              <button className="group image-zoom relative h-48 text-left shadow-soft md:h-64" type="button" onClick={() => setActive(item)} key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/75 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                  <span>
                    <span className="text-xs font-black uppercase text-accent">{item.category}</span>
                    <span className="block font-black text-white">{item.title}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-dark/85 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-dark" type="button" aria-label="Close lightbox" onClick={() => setActive(null)}><X /></button>
            <motion.img className="max-h-[82vh] rounded-card object-contain shadow-premium" src={active.image} alt={active.title} initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
