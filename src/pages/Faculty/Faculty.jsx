import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import { faculty } from '../../data/siteData.js';

export default function Faculty() {
  return (
    <>
      <PageBanner eyebrow="Faculty" title="School leadership and teaching team." text="Meet the Headmaster and the team guiding Mehar Academy students with discipline, care, and regular learning." image="/mehar-campus-collage.jpeg" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Leadership" title="Guidance from the Headmaster." subtitle="Mehar Academy is led with a focus on English medium education, Urdu subject learning, discipline, and student care." />
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
