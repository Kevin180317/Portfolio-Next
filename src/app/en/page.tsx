import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/",
  ogTitle: "Kevin Okhuysen — Websites, Web Apps & Mobile Apps",
  description:
    "Kevin Okhuysen, full stack developer in Tijuana. Websites, web apps, and mobile apps for clinics, dental practices, industrial, and service businesses.",
});

export default function Page() {
  return <HomePage lang="en" />;
}
