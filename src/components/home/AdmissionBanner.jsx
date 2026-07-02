import { CalendarCheck } from 'lucide-react';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';

export default function AdmissionBanner() {
  return (
    <section className="bg-alternate py-8">
      <Container>
        <div className="grid items-center gap-5 rounded-card border border-secondary/15 bg-white p-6 shadow-soft lg:grid-cols-[auto_1fr_auto]">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-dark">
            <CalendarCheck size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-dark">Admissions are open for Nursery to Grade 12.</h2>
            <p className="mt-2 leading-7 text-muted">Schedule a campus walkthrough and meet our academic coordinators this week.</p>
          </div>
          <Button to="/admissions" className="w-full sm:w-auto">Book A Tour</Button>
        </div>
      </Container>
    </section>
  );
}
