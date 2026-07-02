import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button.jsx';
import { navLinks } from '../../data/siteData.js';

export default function MobileMenu({ close }) {
  return (
    <motion.nav
      className="absolute left-0 top-[calc(100%+12px)] grid max-h-[calc(100vh-110px)] w-full gap-2 overflow-y-auto rounded-[28px] border border-border bg-white p-4 shadow-premium 2xl:hidden"
      initial={{ opacity: 0, y: -16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.28 }}
      aria-label="Mobile navigation"
    >
      {navLinks.map((item) => (
        <NavLink
          className={({ isActive }) => `min-h-12 rounded-2xl px-4 py-3 text-sm font-extrabold ${isActive ? 'bg-royal text-white' : 'text-dark hover:bg-alternate hover:text-primary'}`}
          to={item.href}
          onClick={close}
          key={item.href}
        >
          {item.label}
        </NavLink>
      ))}
      <Button to="/admissions" className="mt-2 w-full" onClick={close}>Enquiry</Button>
    </motion.nav>
  );
}
