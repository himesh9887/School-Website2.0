import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { contactItems } from '../../data/siteData.js';

export default function MapSection() {
  return (
    <section className="section-padding bg-alternate">
      <Container className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionTitle align="left" eyebrow="Visit Us" title="Plan your campus walkthrough." subtitle="Meet our admissions team, academic coordinators, and student mentors." />
          <div className="grid gap-4">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <a className="premium-card premium-card-hover flex items-center gap-4 p-4 font-bold" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-alternate text-primary"><Icon size={20} /></span>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="image-zoom min-h-[360px] shadow-premium">
          <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1100&q=85" alt="Aurora International School campus map placeholder" loading="lazy" />
        </div>
      </Container>
    </section>
  );
}
