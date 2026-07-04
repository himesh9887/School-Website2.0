import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { contactItems, school } from '../../data/siteData.js';

export default function MapSection() {
  return (
    <section className="section-padding bg-alternate">
      <Container className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionTitle align="left" eyebrow="Visit Us" title="Plan your campus visit." subtitle={`Visit Mehar Academy at ${school.location} and meet the admissions team.`} />
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
          <img src="/mehar-campus-gate.jpeg" alt="Mehar Academy campus entrance" loading="lazy" />
        </div>
      </Container>
    </section>
  );
}
