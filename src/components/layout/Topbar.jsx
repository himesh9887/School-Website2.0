import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../common/Container.jsx';
import { school } from '../../data/siteData.js';

export default function Topbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 hidden border-b border-white/10 bg-dark/35 py-2 text-white backdrop-blur-xl xl:block">
      <Container className="flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-5">
          <a className="flex items-center gap-2 transition hover:text-accent" href={`tel:${school.phone.replaceAll(' ', '')}`}>
            <Phone size={14} /> {school.phone}
          </a>
          <a className="flex items-center gap-2 transition hover:text-accent" href={`mailto:${school.email}`}>
            <Mail size={14} /> {school.email}
          </a>
          <a className="flex items-center gap-2 transition hover:text-accent" href="https://maps.google.com" target="_blank" rel="noreferrer">
            <MapPin size={14} /> {school.location}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-accent px-3 py-1 text-dark">Admission Open 2026-27</span>
          <a aria-label="Facebook" className="hover:text-accent" href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a aria-label="Instagram" className="hover:text-accent" href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a aria-label="YouTube" className="hover:text-accent" href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
      </Container>
    </div>
  );
}
