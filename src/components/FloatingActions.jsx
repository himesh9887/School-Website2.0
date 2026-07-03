import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { school } from '../data/siteData.js';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="floating-actions">
      <motion.a
        className="whatsapp-button"
        href={school.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3.2, ease: 'easeInOut' }}
      >
        <MessageCircle size={24} />
      </motion.a>
      <AnimatePresence>
        {visible && (
          <motion.button
            className="to-top-button"
            type="button"
            aria-label="Back to top"
            onClick={scrollTop}
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.9 }}
            whileHover={{ y: -3 }}
          >
            <ArrowUp size={21} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
