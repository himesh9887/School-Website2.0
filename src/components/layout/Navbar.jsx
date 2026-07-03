import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button.jsx';
import MobileMenu from './MobileMenu.jsx';
import useScrollLock from '../../hooks/useScrollLock.js';
import { navLinks, school } from '../../data/siteData.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-3 right-3 top-4 z-[70] mx-auto max-w-[1180px] rounded-[28px] border px-3 py-3 transition duration-300 xl:top-12 2xl:left-4 2xl:right-4 2xl:max-w-[1380px] ${
        scrolled || open ? 'border-border bg-white/92 text-dark shadow-premium backdrop-blur-2xl' : 'border-white/20 bg-white/10 text-white backdrop-blur-xl'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.9 }}
    >
      <div className="flex min-w-0 items-center justify-between gap-3">
        <NavLink className="flex min-w-0 items-center gap-3" to="/" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-glow">
            <img className="h-full w-full object-contain p-1" src={school.logo} alt={`${school.name} logo`} />
          </span>
          <span className="max-w-[130px] truncate text-lg font-black sm:max-w-none">{school.shortName}</span>
        </NavLink>

        <nav className="hidden min-w-0 items-center gap-0.5 2xl:flex" aria-label="Main navigation">
          {navLinks.map((item) => (
            <div className="group relative" key={item.href}>
              <NavLink className="nav-link" to={item.href}>
                {item.label}
                {item.label === 'Academics' && <ChevronDown className="ml-1" size={14} />}
              </NavLink>
              {item.label === 'Academics' && (
                <div className="pointer-events-none absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-3 rounded-card border border-border bg-white p-3 text-dark opacity-0 shadow-premium transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">
                  {['Nursery', 'Primary', 'Class 6', 'Class 7', 'Class 8'].map((label) => (
                    <NavLink className="block rounded-2xl px-4 py-3 text-sm font-bold hover:bg-alternate hover:text-primary" to="/academics" key={label}>{label}</NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button to="/admissions" className="hidden 2xl:inline-flex">Enquire</Button>
          <button
            className={`grid h-12 w-12 place-items-center rounded-2xl border transition 2xl:hidden ${scrolled || open ? 'border-border bg-alternate text-dark' : 'border-white/25 bg-white/10 text-white'}`}
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>{open && <MobileMenu close={() => setOpen(false)} />}</AnimatePresence>
    </motion.header>
  );
}
