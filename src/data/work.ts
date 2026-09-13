/**
 * Personal / client sites and apps I've designed and built end-to-end.
 * Distinct from `resume.ts`'s `projects` (employer-side platform work) —
 * these are shippable products with a live URL of their own. Repos are
 * private, so no code links here.
 */

export interface WorkProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "live" | "in-development" | "coming-soon";
  url?: string;
  /** First image is the card thumbnail; the rest show in the detail view. */
  images: string[];
  /**
   * "cover" (default) fills the thumbnail frame — use for real page/app
   * screenshots. "contain" letterboxes instead — use for a logo/icon
   * placeholder so it doesn't get cropped into unrecognizable shape.
   */
  thumbFit?: "cover" | "contain";
}

export const work: WorkProject[] = [
  {
    slug: "poker-on-the-bluff",
    name: "Poker on the Bluff",
    tagline: "Home-game stats, done properly",
    description:
      "A stats-tracking site for a biweekly home poker game — leaderboards, per-player profiles, game history, and year-over-year trends, all backed by Firebase with a secure admin panel for entering results.",
    stack: ["Firebase", "Firestore", "JavaScript", "Chart visualizations"],
    status: "live",
    url: "https://pokeronthebluff.ca",
    images: ["/images/work/poker-on-the-bluff.jpg"],
  },
  {
    slug: "reflect-therapy",
    name: "Reflect Therapy",
    tagline: "A calm, professional home for a counselling practice",
    description:
      "Marketing site for a therapy practice in Antigonish, NS — built to be fast, accessible, and easy for a non-technical owner to trust in production, with a component system built on Radix primitives.",
    stack: ["Next.js", "React", "Radix UI", "Tailwind CSS"],
    status: "live",
    url: "https://www.reflecttherapy.ca",
    images: ["/images/work/reflect-therapy.jpg"],
  },
  {
    slug: "antigonish-golf-app",
    name: "Antigonish Golf & Country Club App",
    tagline: "A native companion app for the club",
    description:
      "An iOS/Android app for Antigonish Golf & Country Club, built with Expo and React Native — course info, rates, membership pricing, and the 19th Hole menu, wired to Supabase for data and push notifications. Currently running on realistic mock data ahead of a real-credentials cutover and app-store submission.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase"],
    status: "in-development",
    images: ["/images/work/antigonish-golf-icon.png"],
    thumbFit: "contain",
  },
  {
    slug: "amherst-lions-club",
    name: "Amherst Lions Club",
    tagline: "A modern rebuild of the club's Wix site",
    description:
      "A ground-up rebuild of the Amherst Lions Club website — history, memorial, and events pages, with a Google Calendar/Forms-backed booking flow — replacing an aging Wix site with a fast static build deployed on GitHub Pages.",
    stack: ["Astro", "Tailwind CSS", "GitHub Pages"],
    status: "coming-soon",
    images: ["/images/work/amherst-lions-logo.jpg"],
    thumbFit: "contain",
  },
];
