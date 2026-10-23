import type { Metadata } from "next";
import { localePath, type Lang } from "@/lib/i18n";

export const SITE_URL = "https://okhuysen.dev";

/** Metadata por página con canonical y hreflang correctos para ES/EN. */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  image,
  ogTitle,
}: {
  lang: Lang;
  path: string;
  title?: string;
  description: string;
  image?: string;
  /** Título OG completo cuando la página no usa la plantilla de título (home). */
  ogTitle?: string;
}): Metadata {
  const url = localePath(lang, path);

  return {
    ...(title && { title }),
    description,
    alternates: {
      canonical: url,
      languages: {
        es: localePath("es", path),
        en: localePath("en", path),
        "x-default": localePath("es", path),
      },
    },
    openGraph: {
      title: ogTitle ?? (title ? `${title} — Kevin Okhuysen` : undefined),
      description,
      url: `${SITE_URL}${url}`,
      siteName: "Okhuysen Dev",
      type: "website",
      locale: lang === "en" ? "en_US" : "es_MX",
      ...(image && { images: [{ url: image }] }),
    },
  };
}
