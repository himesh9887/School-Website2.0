import { useState } from 'react';
import { Mail, User } from 'lucide-react';
import Button from '../../components/common/Button.jsx';
import Container from '../../components/common/Container.jsx';
import Input from '../../components/common/Input.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import Textarea from '../../components/common/Textarea.jsx';
import { contactItems, school } from '../../data/siteData.js';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const mapQuery = encodeURIComponent(school.location);

  const submit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const next = {};
    if (!data.name) next.name = 'Name is required.';
    if (!/\S+@\S+\.\S+/.test(data.email || '')) next.email = 'Valid email is required.';
    if (!data.message) next.message = 'Message is required.';
    setErrors(next);
    setSent(Object.keys(next).length === 0);
  };

  return (
    <>
      <PageBanner eyebrow="Contact" title="We would love to welcome you." text="Connect with admissions, book a tour, ask a question, or visit the Mehar Academy campus." image="/mehar-banner.svg" />
      <section className="section-padding bg-background">
        <Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionTitle align="left" eyebrow="Reach Us" title="Admissions office and campus details." subtitle="Office hours: Monday to Saturday, 8:30 AM to 4:30 PM." />
            <div className="grid gap-4">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <a className="premium-card premium-card-hover flex items-center gap-4 p-4 font-bold" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-alternate text-primary"><Icon size={20} /></span>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <form className="premium-card p-6 sm:p-8" onSubmit={submit} noValidate>
            <h2 className="text-2xl font-black">Send A Message</h2>
            <div className="mt-6 grid gap-5">
              <Input label="Name" name="name" icon={User} error={errors.name} placeholder="Your name" />
              <Input label="Email" name="email" icon={Mail} error={errors.email} placeholder="you@example.com" />
              <Textarea label="Message" name="message" error={errors.message} placeholder="How can we help?" />
              {sent && <p className="rounded-2xl bg-success/10 p-4 font-bold text-success">Message sent successfully. We will reply soon.</p>}
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </form>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container>
          <div className="min-h-[420px] overflow-hidden rounded-card shadow-premium">
            <iframe
              className="h-[420px] w-full border-0"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              title={`${school.name} map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}
