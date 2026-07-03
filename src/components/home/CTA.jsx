import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';

export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-royal p-8 text-white shadow-premium sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-extrabold uppercase">Admissions Open</span>
            <h2 className="mt-5 text-[28px] font-black leading-tight sm:text-[42px]">Give your child a school experience that feels personal, caring, and future-ready up to Class 8.</h2>
            <div className="mt-8 grid gap-3 sm:inline-flex">
              <Button to="/admissions" variant="light">Apply For Admission</Button>
              <Button to="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
