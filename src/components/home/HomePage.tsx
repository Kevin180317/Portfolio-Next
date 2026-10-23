import type { Lang } from "@/lib/i18n";
import Hero from "./Hero";
import FeaturedWork from "./FeaturedWork";
import Services from "./Services";
import Process from "./Process";
import Testimonials from "./Testimonials";
import About from "./About";
import FAQ from "./FAQ";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <main id="main">
      <Hero lang={lang} />
      <FeaturedWork lang={lang} />
      <Services lang={lang} />
      <Process lang={lang} />
      <Testimonials lang={lang} />
      <About lang={lang} />
      <FAQ lang={lang} />
    </main>
  );
}
