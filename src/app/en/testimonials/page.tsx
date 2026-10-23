import type { Metadata } from "next";
import TestimonialsPage from "@/components/TestimonialsPage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/testimonials",
  ...pageSeo.testimonials.en,
});

export default function Page() {
  return <TestimonialsPage lang="en" />;
}
