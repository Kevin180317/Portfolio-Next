import type { Metadata } from "next";
import TestimonialsPage from "@/components/TestimonialsPage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "es",
  path: "/testimonials",
  ...pageSeo.testimonials.es,
});

export default function Page() {
  return <TestimonialsPage lang="es" />;
}
