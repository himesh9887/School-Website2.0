import { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import Button from '../../components/common/Button.jsx';
import Container from '../../components/common/Container.jsx';
import Input from '../../components/common/Input.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import Textarea from '../../components/common/Textarea.jsx';
import { admissionSteps } from '../../data/siteData.js';

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const submit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = {};
    if (!data.name) nextErrors.name = 'Parent name is required.';
    if (!/^\+?\d[\d\s-]{7,}$/.test(data.phone || '')) nextErrors.phone = 'Enter a valid phone number.';
    if (!/\S+@\S+\.\S+/.test(data.email || '')) nextErrors.email = 'Enter a valid email address.';
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <>
      <PageBanner eyebrow="Admissions" title="A clear, warm admissions journey." text="Understand eligibility, documents, timelines, fees, and admission interactions in one place." image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionTitle align="left" eyebrow="Process" title="Simple steps with personal guidance." subtitle="Our admissions office supports every family through campus tours, student interaction, documentation, and onboarding." />
            <div className="grid gap-4">
              {admissionSteps.map((step, index) => (
                <div className="premium-card flex items-center gap-4 p-4" key={step}>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold font-black text-dark">{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
          <form className="premium-card p-6 sm:p-8" onSubmit={submit} noValidate>
            <h2 className="text-2xl font-black">Admission Enquiry Form</h2>
            <div className="mt-6 grid gap-5">
              <Input label="Parent Name" name="name" icon={User} error={errors.name} placeholder="Enter full name" />
              <Input label="Phone Number" name="phone" icon={Phone} error={errors.phone} placeholder="+91 90000 00000" />
              <Input label="Email Address" name="email" icon={Mail} error={errors.email} placeholder="parent@example.com" />
              <label>
                <span className="mb-2 block text-sm font-extrabold text-dark">Grade Applying For</span>
                <select className="form-field" name="grade" defaultValue="Nursery">
                  {['Nursery', 'Primary', 'Middle', 'Secondary'].map((grade) => <option key={grade}>{grade}</option>)}
                </select>
              </label>
              <Textarea label="Message" name="message" placeholder="Tell us about your preferred tour date or questions." />
              {submitted && <p className="rounded-2xl bg-success/10 p-4 font-bold text-success">Thank you. Our admissions team will contact you shortly.</p>}
              <Button type="submit" className="w-full">Submit Enquiry</Button>
            </div>
          </form>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container className="grid gap-6 lg:grid-cols-3">
          {['Eligibility', 'Required Documents', 'Admission Timeline'].map((title, index) => (
            <article className="premium-card premium-card-hover p-6" key={title}>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 leading-7 text-muted">
                {[
                  'Age and grade readiness are reviewed according to school policy and prior academic records.',
                  'Birth certificate, transfer certificate, previous report card, photographs, and address proof.',
                  'Applications are reviewed weekly, with interaction and offer stages communicated clearly.',
                ][index]}
              </p>
            </article>
          ))}
        </Container>
      </section>
      <section className="section-padding bg-alternate">
        <Container>
          <SectionTitle eyebrow="FAQs" title="Questions families often ask." subtitle="A concise guide for admissions, fees, tours, and onboarding." />
          <div className="grid gap-4 md:grid-cols-2">
            {['Is transport available?', 'Can we visit the campus?', 'Is there a fee structure?', 'Do you offer scholarships?'].map((question) => (
              <article className="premium-card p-5" key={question}>
                <h3 className="font-black">{question}</h3>
                <p className="mt-2 leading-7 text-muted">Yes. Our admissions team shares the relevant details during the inquiry and tour process.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
