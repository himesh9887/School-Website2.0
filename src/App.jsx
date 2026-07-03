import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BackToTop from './components/layout/BackToTop.jsx';
import FloatingWhatsapp from './components/layout/FloatingWhatsapp.jsx';
import Footer from './components/layout/Footer.jsx';
import Loader from './components/layout/Loader.jsx';
import Navbar from './components/layout/Navbar.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';
import Topbar from './components/layout/Topbar.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const Academics = lazy(() => import('./pages/Academics/Academics.jsx'));
const Admissions = lazy(() => import('./pages/Admissions/Admissions.jsx'));
const Facilities = lazy(() => import('./pages/Facilities/Facilities.jsx'));
const Faculty = lazy(() => import('./pages/Faculty/Faculty.jsx'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery.jsx'));
const News = lazy(() => import('./pages/News/News.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

function RouteFallback() {
  return <div className="min-h-[55vh] bg-background" aria-label="Loading page" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 4300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <Topbar />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<RouteFallback />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
