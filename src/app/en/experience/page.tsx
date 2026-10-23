import type { Metadata } from "next";
import ExperiencePage from "@/components/ExperiencePage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/experience",
  ...pageSeo.experience.en,
});

export default function Page() {
  return <ExperiencePage lang="en" />;
}
