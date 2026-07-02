import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { school } from '../../data/siteData.js';

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-5 right-4 z-50 grid gap-3 sm:right-6">
      <motion.a
        className="relative grid h-14 w-14 place-items-center rounded-full bg-success text-white shadow-premium"
        href={school.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3.1 }}
      >
        <span className="absolute inset-0 rounded-full bg-success/45" style={{ animation: 'pulse-ring 1.9s ease-out infinite' }} />
        <MessageCircle className="relative z-10" size={25} />
      </motion.a>
      <a className="grid h-12 w-12 place-items-center rounded-full bg-royal text-white shadow-soft transition hover:-translate-y-1 sm:hidden" href={`tel:${school.phone.replaceAll(' ', '')}`} aria-label="Call school">
        <Phone size={20} />
      </a>
    </div>
  );
}
