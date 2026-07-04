import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import { heroSlides, school } from '../../data/siteData.js';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" loop autoplay={{ delay: 5200, disableOnInteraction: false }} pagination={{ clickable: true }} className="absolute inset-0 h-full">
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <img className="h-full w-full object-cover" src={slide.image} alt="" loading="eager" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.82),rgba(30,64,175,.48),rgba(15,23,42,.25))]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className="relative z-10 flex min-h-screen items-center pt-28">
        <motion.div className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-extrabold uppercase backdrop-blur-xl">Admission Open 2026-27</span>
          <h1 className="mt-5 text-[34px] font-black leading-tight sm:text-[60px] lg:text-[70px]">{school.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg lg:mx-0">
            English medium education from Nursery to Class 8 with Urdu as an important subject.
          </p>
          <div className="mt-8 grid gap-3 sm:inline-flex sm:flex-wrap">
            <Button to="/admissions" className="w-full sm:w-auto">Admission Open</Button>
            <Button to="/about" variant="light" className="w-full sm:w-auto">Explore School</Button>
          </div>
        </motion.div>
      </Container>
      <a className="absolute bottom-8 left-1/2 z-10 grid -translate-x-1/2 place-items-center rounded-full border border-white/25 bg-white/15 p-3 backdrop-blur-xl" href="#home-stats" aria-label="Scroll down">
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}
