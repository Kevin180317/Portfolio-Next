import type { Metadata } from "next";
import WorkPage from "@/components/WorkPage";
import { pageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/pages";

export const metadata: Metadata = pageMetadata({
  lang: "es",
  path: "/projects",
  ...pageSeo.projects.es,
});

export default function Page() {
  return <WorkPage lang="es" />;
}
