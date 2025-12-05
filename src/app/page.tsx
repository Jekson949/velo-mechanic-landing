import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import { WhyUs, Testimonials } from "@/components/WhyAndTestimonials";
import ContactSection from "@/components/ContactSection";
import YoutubeShorts from "@/components/YoutubeShorts";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Веломеханік у Львові",
    description:
      "Професійний веломеханік: прокачка гідравлічних гальм, ТО повітряно-масляних вилок, ремонт та налаштування велосипедів.",
    url: "https://velo-mechanic.example.com",
    telephone: "+380000000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Мукачево",
      addressCountry: "UA",
      streetAddress: "вул. Прикладна, 1",
    },
    areaServed: {
      "@type": "City",
      name: "Мукачево",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <YoutubeShorts />
        <WhyUs />
        <Testimonials />
        <ContactSection />
        <footer className="border-t border-slate-800 bg-slate-950 py-6">
          <div className="container-default flex flex-col justify-between gap-3 text-xs text-slate-500 md:flex-row">
            <span>© {new Date().getFullYear()} Веломеханік у Мукачево</span>
            <span>Сайт виконаний з фокусом на швидкість і SEO.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
