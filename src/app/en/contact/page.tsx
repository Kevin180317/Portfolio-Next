import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/contact",
  ...pageSeo.contact.en,
});

export default function Page() {
  return <ContactPage lang="en" />;
}
