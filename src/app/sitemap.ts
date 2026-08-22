import type { MetadataRoute } from "next";
import { projectsSpanish } from "./data/projectListComplete";

const baseUrl = "https://okhuysen.dev";
const staticRoutes = ["", "/contact", "/projects", "/experience", "/testimonials"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) => {
    const esUrl = `${baseUrl}${route}`;
    const enUrl = `${baseUrl}/en${route}`;
    const alternates = { languages: { es: esUrl, en: enUrl } };
    return [
      { url: esUrl, alternates },
      { url: enUrl, alternates },
    ];
  });

  const projectEntries: MetadataRoute.Sitemap = projectsSpanish.flatMap((project) => {
    const slug = project.link.startsWith("/") ? project.link : `/${project.link}`;
    const esUrl = `${baseUrl}/projects${slug}`;
    const enUrl = `${baseUrl}/en/projects${slug}`;
    const alternates = { languages: { es: esUrl, en: enUrl } };
    return [
      { url: esUrl, alternates },
      { url: enUrl, alternates },
    ];
  });

  return [...staticEntries, ...projectEntries];
}
