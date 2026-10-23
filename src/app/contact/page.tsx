import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "es",
  path: "/contact",
  ...pageSeo.contact.es,
});

export default function Page() {
  return <ContactPage lang="es" />;
}
