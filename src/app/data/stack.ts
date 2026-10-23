import type { Lang } from "@/lib/i18n";

export interface StackGroup {
  label: Record<Lang, string>;
  /** icon = nombre del archivo en /public/icons sin extensión */
  items: { name: string; icon: string }[];
}

export const stackGroups: StackGroup[] = [
  {
    label: { es: "Frontend", en: "Frontend" },
    items: [
      { name: "Astro", icon: "astro-FF5D01" },
      { name: "Next.js", icon: "nextdotjs-FFFFFF" },
      { name: "React", icon: "react-61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss-06B6D4" },
      { name: "Vue.js", icon: "vuedotjs-42B883" },
    ],
  },
  {
    label: { es: "Backend y datos", en: "Backend & data" },
    items: [
      { name: "Node.js", icon: "nodedotjs-339933" },
      { name: "Express", icon: "express-FFFFFF" },
      { name: "Python", icon: "python-3776AB" },
      { name: "MySQL", icon: "mysql-4479A1" },
      { name: "Supabase", icon: "supabase-3ECF8E" },
      { name: "Firebase", icon: "firebase-FFCA28" },
    ],
  },
  {
    label: { es: "Móvil", en: "Mobile" },
    items: [
      { name: "Kotlin", icon: "kotlin-7F52FF" },
      { name: "Swift", icon: "swift-FA7343" },
      { name: "Android Studio", icon: "androidstudio-3DDC84" },
    ],
  },
  {
    label: { es: "Pagos e integraciones", en: "Payments & integrations" },
    items: [
      { name: "Stripe", icon: "stripe-635BFF" },
      { name: "QuickBooks", icon: "quickbooks-2CA01C" },
      { name: "Cloudflare", icon: "cloudflare-F38020" },
    ],
  },
  {
    label: { es: "Deploy", en: "Deploy" },
    items: [
      { name: "Vercel", icon: "vercel-FFFFFF" },
      { name: "Netlify", icon: "netlify-00a98f" },
      { name: "GitHub", icon: "github-FFFFFF" },
    ],
  },
];
