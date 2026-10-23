import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "es",
  path: "/",
  ogTitle: "Kevin Okhuysen — Sitios Web, Web Apps y Apps Móviles",
  description:
    "Kevin Okhuysen, desarrollador full stack en Tijuana. Sitios web, web apps y apps móviles para clínicas, consultorios dentales, industria y negocios de servicios.",
});

export default function Page() {
  return <HomePage lang="es" />;
}
