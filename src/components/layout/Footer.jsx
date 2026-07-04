import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import { contactItems, navLinks, school } from '../../data/siteData.js';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="grid gap-9 py-10 text-center sm:text-left lg:grid-cols-[1.4fr_.8fr_.8fr_1.1fr] lg:gap-10 lg:py-14">
        <div className="grid justify-items-center sm:justify-items-start">
          <div className="flex max-w-full items-center justify-center gap-3 sm:justify-start">
            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-glow">
              <img className="h-full w-full object-contain p-1" src={school.logo} alt={`${school.name} logo`} />
            </span>
            <strong className="min-w-0 text-lg font-black leading-tight sm:text-xl">{school.name}</strong>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68 sm:mt-5 sm:text-base sm:leading-8">
            English medium education from Nursery to Class 8 with Urdu as a subject, strong basics, discipline, and safe growth.
          </p>
          <div className="mt-5 flex justify-center gap-3 sm:mt-6 sm:justify-start">
            <a aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-dark" href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-dark" href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a aria-label="YouTube" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-dark" href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:grid-cols-1">
            {navLinks.map((link) => (
              <Link className="rounded-xl bg-white/5 px-3 py-2 text-sm text-white/68 transition hover:translate-x-1 hover:text-accent sm:bg-transparent sm:px-0 sm:py-0 sm:text-base" to={link.href} key={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black">Admissions</h3>
          <div className="mt-4 grid gap-3 text-white/68 sm:mt-5">
            <Link className="transition hover:text-accent" to="/admissions">Process</Link>
            <Link className="transition hover:text-accent" to="/academics">Programs</Link>
            <Link className="transition hover:text-accent" to="/contact">Campus Tour</Link>
            <Button to="/admissions" className="mt-3 w-full sm:w-fit">Apply Now</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black">Contact</h3>
          <div className="mt-4 grid gap-4 sm:mt-5">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <a className="flex justify-center gap-3 break-words text-sm leading-6 text-white/68 transition hover:text-accent sm:justify-start sm:text-base" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                <Icon className="mt-1 shrink-0" size={18} /> <span className="min-w-0">{label}</span>
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-card border border-white/10 bg-white/10 p-4 text-left">
            <strong className="text-sm">Newsletter</strong>
            <div className="mt-3 grid gap-2 sm:flex">
              <input className="min-h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-3 text-sm outline-none placeholder:text-white/45" placeholder="Email address" aria-label="Email address" />
              <button className="min-h-11 rounded-xl bg-accent px-4 text-sm font-black text-dark" type="button">Join</button>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs leading-6 text-white/55 sm:text-sm">
        Copyright 2026 {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
