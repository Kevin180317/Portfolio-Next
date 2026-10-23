import type { Metadata } from "next";
import WorkPage from "@/components/WorkPage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/projects",
  ...pageSeo.projects.en,
});

export default function Page() {
  return <WorkPage lang="en" />;
}
