import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = ["", "/projects", "/experience", "/testimonials", "/contact"];

function entry(route: string, priority: number): MetadataRoute.Sitemap {
  const esUrl = `${SITE_URL}${route || "/"}`;
  const enUrl = `${SITE_URL}/en${route}`;
  const alternates = { languages: { es: esUrl, en: enUrl } };
  return [
    { url: esUrl, alternates, priority },
    { url: enUrl, alternates, priority },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.flatMap((route) => entry(route, route === "" ? 1 : 0.8)),
    ...projects.flatMap((p) => entry(`/projects/${p.slug}`, p.featured ? 0.7 : 0.5)),
  ];
}
