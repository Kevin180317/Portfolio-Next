import type { Metadata } from "next";
import ExperiencePage from "@/components/ExperiencePage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "es",
  path: "/experience",
  ...pageSeo.experience.es,
});

export default function Page() {
  return <ExperiencePage lang="es" />;
}
