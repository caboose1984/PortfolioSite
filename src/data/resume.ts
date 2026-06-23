/**
 * The CV itself. Sourced from Andrew_Arsenault_CV_2026.
 */

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
}

export interface EarlierRole {
  company: string;
  role: string;
  period: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
}

export interface OpenSource {
  name: string;
  repo: string;
  role: string;
  description: string;
  stars?: string;
  language?: string;
}

export interface Writing {
  title: string;
  venue: string;
  year: string;
  url?: string;
}

export interface Education {
  school: string;
  credential: string;
  year: string;
  detail?: string;
}

/* -------------------------------------------------------------------------- */

export const about = [
  "I'm a results-driven Senior Systems Engineer with 10+ years owning enterprise SaaS platforms, engineering workflow automation, and eliminating operational toil at scale. My deep work is in Slack platform engineering, Google Workspace administration, and identity & access management — Okta, SCIM, SAML, and OAuth.",
  "I build the API integrations, low-code/no-code automations, and custom tooling that remove friction and let teams scale. I've worked hands-on with generative AI tooling and concepts — MCP, prompt engineering, and AI-driven workflow automation — and I partner cross-functionally to turn process pain into high-impact engineering solutions.",
];

export const experience: Experience[] = [
  {
    company: "Coinbase",
    role: "Senior Systems Engineer",
    start: "Mar 2022",
    end: "Present",
    location: "Remote",
    summary:
      "Primary Slack platform owner and service owner — governance, app security, provisioning, and AI feature rollout across an enterprise-scale workforce.",
    highlights: [
      "Own the Slack platform: lead governance, app security reviews, SCIM behavior, AI feature rollout controls, and elevated-scope approval processes for enterprise-scale reliability and security.",
      "Engineered IAM improvements across Okta, LDAP, and Workday→Okta→Slack provisioning; designed dynamic attribute-driven group models that replaced static LDAP groups and eliminated manual access provisioning toil org-wide.",
      "Built custom Slack bots and API-driven Jira workflow automations that eliminated 600+ hours/year of manual work and enabled self-service tooling for support teams.",
      "Served as IT DRI for the Google Workspace MCP server launch — pre-release testing, OAuth flow validation, and hands-on feedback applying direct MCP and generative-AI integration experience.",
      "Drove Slack Webhook Proxy deprecation using Datadog telemetry to find legacy consumers and coordinate migration to native API integrations and custom apps.",
      "Recognized by ESTO leadership for leading simultaneous incident responses and delivering platform solutions for partner teams under tight timelines.",
    ],
    stack: ["Okta", "Slack Platform", "Workday", "Datadog", "Jira", "Python", "OAuth/SCIM"],
  },
  {
    company: "Okta",
    role: "Senior Windows Client Platform Engineer",
    start: "May 2024",
    end: "Sep 2024",
    location: "Remote",
    summary:
      "Managed a global, cross-platform endpoint fleet and stood up greenfield Azure cloud-management infrastructure as code.",
    highlights: [
      "Orchestrated a global endpoint fleet across macOS, Windows, ChromeOS, iOS, and Linux using Intune, JAMF Pro, WorkspaceOne, and Google Workspace MDM — with fleet-health visibility via Looker dashboards.",
      "Designed a custom Temporal workflow to automate device offboarding: remote lock, lock-key escrow to Oomnitza, and DynamoDB audit logging for compliance.",
      "Led greenfield Azure setup — Log Analytics, Key Vaults, Automation Accounts, Runbooks, and Intune/Autopilot — establishing a scalable cloud-management foundation.",
      "Executed MDM server upgrades via infrastructure-as-code and administered Azure groups and RBAC with Terraform, reducing downtime.",
      "Designed SAML/OIDC app integrations in Okta and built Okta Workflows automations triggered by Jira service requests, eliminating manual provisioning steps.",
    ],
    stack: ["Intune", "JAMF Pro", "Terraform", "Azure", "Temporal", "Okta Workflows"],
  },
  {
    company: "Peloton Interactive",
    role: "Client Platform Engineer — Windows",
    start: "Jun 2021",
    end: "Mar 2022",
    location: "Remote",
    summary:
      "Managed a global endpoint fleet and built zero-touch enrollment and compliance reporting automation.",
    highlights: [
      "Managed a global fleet across macOS, Windows, Linux, ChromeOS, iOS, and Android using Intune, JAMF, Chef, and Ansible.",
      "Developed complex PowerShell for zero-touch enrollment (ZTE) via Autopilot and built Azure Log Analytics dashboards for OS-version and patch-compliance metrics.",
      "Remediated Windows OS issues with PowerShell Proactive Remediations; managed Windows 10 / EM+S / M365 licensing and Azure AD.",
    ],
    stack: ["Intune", "Autopilot", "PowerShell", "JAMF", "Ansible", "Azure AD"],
  },
  {
    company: "SystemCenterDudes",
    role: "Endpoint Management Consultant",
    start: "Jan 2021",
    end: "Mar 2022",
    location: "Contract",
    summary:
      "Consulted on cloud device management and client migrations to Intune.",
    highlights: [
      "Designed and implemented cloud device management; assisted clients migrating from WorkspaceOne and JAMF to Intune across Windows, macOS, iOS, and Android.",
      "Configured compliance policies, app protection, conditional access, and security baselines; ran client training on security best practices.",
    ],
    stack: ["Intune", "Conditional Access", "macOS", "Windows"],
  },
  {
    company: "Nova Scotia Community College",
    role: "Digital Technology Lead",
    start: "Dec 2016",
    end: "Jun 2021",
    location: "Nova Scotia",
    summary:
      "Led province-wide software packaging, deployment, and IT service management.",
    highlights: [
      "Led the SCCM/MECM packaging team: built and deployed 100+ application packages and complex task sequences for BIOS updates, encryption, and Windows feature upgrades province-wide.",
      "Implemented Intune MDM and Autopilot for loaner devices; designed a college-wide Windows 10 base image via Windows Deployment Services.",
      "Launched the TeamDynamix IT service desk and knowledge base (500+ services, hundreds of KB articles) and led Change Management across the college.",
      "Performed vulnerability scanning (Nessus), rogue-device detection (NMAP), and traffic analysis (Wireshark); configured an ELK stack to monitor Windows event logs on CentOS.",
    ],
    stack: ["SCCM/MECM", "PowerShell", "Intune", "ELK", "Nessus"],
  },
];

export const earlierRoles: EarlierRole[] = [
  {
    company: "Nova Scotia Community College",
    role: "Digital Technology Analyst",
    period: "Apr 2015 – Dec 2016",
  },
  {
    company: "Sobeys Corporate",
    role: "IT Security Administrator",
    period: "Feb 2014 – Apr 2015",
  },
  {
    company: "Staples Canada",
    role: "Technical Consultant",
    period: "Mar 2013 – Mar 2014",
  },
];

/**
 * No public open-source repos on the CV yet. Add entries here (and they'll
 * appear automatically) once you have a GitHub username + repos to feature.
 */
export const openSource: OpenSource[] = [];

export const projects: Project[] = [
  {
    name: "Slack Automation Suite",
    tagline: "600+ hours/year reclaimed",
    description:
      "Custom Slack bots and API-driven Jira workflow automations that eliminated 600+ hours of manual work per year, automating complex user-access assignment and enabling self-service tooling for support teams.",
    tags: ["Slack Platform", "Jira API", "Python", "Automation"],
  },
  {
    name: "Dynamic IAM Provisioning",
    tagline: "Workday → Okta → Slack",
    description:
      "Re-architected identity provisioning around dynamic, attribute-driven group models that replaced brittle static LDAP groups — eliminating manual access provisioning toil across the organization.",
    tags: ["Okta", "SCIM", "Workday", "LDAP"],
  },
  {
    name: "Temporal Device Offboarding",
    tagline: "Compliant, hands-off deprovisioning",
    description:
      "A custom Temporal workflow that automates device offboarding end-to-end: remote lock, lock-key escrow to Oomnitza, and DynamoDB audit logging for compliance.",
    tags: ["Temporal", "DynamoDB", "Workflow Automation", "Compliance"],
  },
  {
    name: "Greenfield Azure Platform",
    tagline: "Cloud management from zero",
    description:
      "Stood up a greenfield Azure environment as code — Log Analytics, Key Vaults, Automation Accounts, Runbooks, and Intune/Autopilot — establishing a scalable endpoint cloud-management foundation.",
    tags: ["Azure", "Terraform", "Intune", "IaC"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Identity & Access",
    items: [
      "Okta (SSO, SCIM, Workflows)",
      "SAML / OIDC / OAuth",
      "Azure / Entra ID / AAD",
      "LDAP",
      "Workday provisioning",
    ],
  },
  {
    group: "Endpoint & Fleet",
    items: [
      "Microsoft Intune / Autopilot",
      "JAMF Pro (Certified Admin)",
      "WorkspaceOne",
      "Google Workspace MDM",
      "SCCM / MECM",
      "Autopkg / Munki",
    ],
  },
  {
    group: "Automation & IaC",
    items: [
      "PowerShell",
      "Python",
      "Terraform",
      "Temporal",
      "Slack bots & Platform",
      "API integrations",
    ],
  },
  {
    group: "Cloud, CI & Observability",
    items: [
      "Azure (Log Analytics, Key Vault, Runbooks)",
      "Datadog",
      "ELK",
      "Buildkite",
      "GitHub Actions",
    ],
  },
  {
    group: "Practice & Process",
    items: [
      "ITIL / Change Management",
      "Generative AI / MCP",
      "Incident response",
      "Jira / Confluence",
      "Windows / macOS / Linux / ChromeOS",
    ],
  },
];

export const writing: Writing[] = [];

export const education: Education[] = [
  {
    school: "CompuCollege",
    credential: "Information Systems Specialist",
    year: "2004",
  },
];

export const certifications: string[] = [
  "JAMF Certified Administrator",
  "JAMF Certified Technician",
  "ITIL Foundations V3",
];
