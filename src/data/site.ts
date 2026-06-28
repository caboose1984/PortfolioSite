/**
 * Global site identity + SEO.
 */
export const site = {
  name: "Andrew Arsenault",
  role: "Senior Systems & Platform Engineer",
  tagline:
    "I own enterprise SaaS platforms end-to-end — identity, Slack, and endpoint fleets — and build the automation that eliminates operational toil at scale.",
  location: "Antigonish, NS, Canada · Remote",
  email: "andrewjarsenault@gmail.com",

  /**
   * Used for canonical URLs + sitemap.
   * For a GitHub user/org page repo named `<username>.github.io`, this is
   *   https://<username>.github.io
   */
  url: "https://andrewarsenault.ca",

  /** Social / professional links. Leave a value empty ("") to hide the link. */
  socials: {
    github: "https://github.com/Caboose1984",
    linkedin: "https://www.linkedin.com/in/andrew-arsenault-810a3381/",

    twitter: "https://x.com/aarsenault1984",
    bluesky: "",
    resumePdf: "/resume.pdf", // drop a file at public/resume.pdf to enable
  },

  /** Headline stats shown in the hero. */
  stats: [
    { value: "10+", label: "Years owning enterprise platforms" },
    { value: "2,500+", label: "Hours of manual toil automated away" },
    { value: "5 OS", label: "Endpoint platforms managed at global scale" },
  ],
} as const;
