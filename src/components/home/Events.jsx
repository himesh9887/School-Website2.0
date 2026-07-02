import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import { events } from '../../data/siteData.js';

export default function Events() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle eyebrow="Events" title="A calendar full of participation." subtitle="Competitions, celebrations, exhibitions, and workshops that build confidence beyond classrooms." />
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <article className="premium-card premium-card-hover p-6" key={event.title}>
              <span className="inline-flex rounded-2xl bg-gold px-4 py-3 text-lg font-black text-dark">{event.date}</span>
              <h3 className="mt-5 text-xl font-black">{event.title}</h3>
              <p className="mt-3 leading-7 text-muted">{event.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
