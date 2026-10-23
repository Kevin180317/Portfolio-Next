export type Lang = "es" | "en";

/** Prefija la ruta con /en cuando el idioma es inglés. Soporta anclas ("/#services"). */
export function localePath(lang: Lang, path: string) {
  if (lang === "es") return path;
  if (path === "/") return "/en";
  if (path.startsWith("/#")) return `/en${path.slice(1)}`;
  return `/en${path}`;
}

export function langFromPath(pathname: string | null): Lang {
  return pathname?.startsWith("/en") ? "en" : "es";
}

export const EXPERIENCE_START_YEAR = 2021;

export function yearsOfExperience() {
  return new Date().getFullYear() - EXPERIENCE_START_YEAR;
}

export const CONTACT_EMAIL = "okhuysen.dev@gmail.com";
export const GITHUB_URL = "https://github.com/kevin180317";
