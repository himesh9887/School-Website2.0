import { Star } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { testimonials } from '../../data/siteData.js';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle eyebrow="Testimonials" title="Families feel the difference." subtitle="Parent and student voices from the Aurora community." />
        <Swiper modules={[Autoplay, Pagination]} loop autoplay={{ delay: 4300 }} pagination={{ clickable: true }} spaceBetween={24} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-12">
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="premium-card h-full p-7">
                <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, index) => <Star fill="currentColor" size={18} key={index} />)}</div>
                <p className="mt-5 leading-8 text-muted">"{item.text}"</p>
                <strong className="mt-6 block text-lg font-black">{item.name}</strong>
                <span className="text-sm font-semibold text-primary">{item.role}</span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
