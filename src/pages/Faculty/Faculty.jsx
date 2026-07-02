import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import { faculty } from '../../data/siteData.js';

export default function Faculty() {
  return (
    <>
      <PageBanner eyebrow="Faculty" title="Mentors who know every learner by name." text="Meet the principal, vice principal, coordinators, and faculty who shape the Aurora experience." image="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Leadership & Teachers" title="Experienced educators with a student-first mindset." subtitle="Faculty profiles include qualification, experience, department, and role clarity." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((person) => (
              <article className="premium-card premium-card-hover overflow-hidden text-center" key={person.name}>
                <div className="image-zoom h-72 rounded-b-none"><img src={person.image} alt={person.name} loading="lazy" /></div>
                <div className="p-6">
                  <h2 className="text-2xl font-black">{person.name}</h2>
                  <p className="mt-1 font-extrabold text-primary">{person.role}</p>
                  <div className="mt-5 grid gap-2 rounded-2xl bg-alternate p-4 text-sm text-muted">
                    <span>{person.qualification}</span>
                    <span>{person.experience}</span>
                    <span>{person.department}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
