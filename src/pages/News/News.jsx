import Container from '../../components/common/Container.jsx';
import PageBanner from '../../components/common/PageBanner.jsx';
import SectionTitle from '../../components/common/SectionTitle.jsx';
import { newsItems } from '../../data/siteData.js';

export default function News() {
  return (
    <>
      <PageBanner eyebrow="News" title="Announcements, events, and achievements." text="Follow important notices, holiday lists, competitions, school events, and community milestones." image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85" />
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle eyebrow="Latest Updates" title="Everything families need to know." subtitle="Beautiful cards and a clean timeline make updates easy to scan." />
          <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
            <div className="grid gap-5">
              {newsItems.map(({ title, date, category, icon: Icon, text }) => (
                <article className="premium-card premium-card-hover p-6" key={title}>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-alternate text-primary"><Icon size={22} /></span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-black text-accent">{category}</span>
                    <span className="text-sm font-bold text-muted">{date}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black">{title}</h2>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </article>
              ))}
            </div>
            <aside className="premium-card h-fit p-6">
              <h2 className="text-2xl font-black">Beautiful Timeline</h2>
              <div className="mt-6 grid gap-5">
                {newsItems.map((item) => (
                  <div className="border-l-2 border-secondary/20 pl-5" key={item.title}>
                    <span className="text-sm font-black text-primary">{item.date}</span>
                    <p className="mt-1 font-bold text-dark">{item.title}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
