import AboutPreview from '../../components/home/AboutPreview.jsx';
import AdmissionBanner from '../../components/home/AdmissionBanner.jsx';
import CTA from '../../components/home/CTA.jsx';
import Events from '../../components/home/Events.jsx';
import Facilities from '../../components/home/Facilities.jsx';
import GalleryPreview from '../../components/home/GalleryPreview.jsx';
import Hero from '../../components/home/Hero.jsx';
import LatestNews from '../../components/home/LatestNews.jsx';
import MapSection from '../../components/home/MapSection.jsx';
import PrincipalMessage from '../../components/home/PrincipalMessage.jsx';
import Programs from '../../components/home/Programs.jsx';
import Statistics from '../../components/home/Statistics.jsx';
import Testimonials from '../../components/home/Testimonials.jsx';
import WhyChooseUs from '../../components/home/WhyChooseUs.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <AdmissionBanner />
      <AboutPreview />
      <WhyChooseUs />
      <Facilities />
      <PrincipalMessage />
      <Programs />
      <Statistics full />
      <GalleryPreview />
      <LatestNews />
      <Testimonials />
      <Events />
      <CTA />
      <MapSection />
    </>
  );
}
