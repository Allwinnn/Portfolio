import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";

export const navLinks = [
  { name: "About", url: "#about" },
  { name: "Work Experience", url: "#jobs" },
  { name: "Work", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

export const socialMedia = [
  { name: "GitHub", url: "https://github.com", icon: GitHubIcon },
  { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
  { name: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
  { name: "Instagram", url: "https://instagram.com", icon: InstagramIcon },
];

export const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React / Vite",
  "Node.js",
  "Python",
  "PostgreSQL",
];

export const jobs = [
  {
    title: "AI Engineering Intern",
    company: "Marxen",
    url: "https://www.marxen.in/",
    range: "May 2026 - June 2026",
    duties: [
      "Worked on Naadhi HMS, a production hospital management system focused on clinical workflows, insurance operations, and patient engagement.",
      "Analyzed hospital and insurance requirements and proposed Asha AI, a multi-agent system for discharge summary automation, TPA insurance auditing, and patient communication.",
      "Designed REST APIs and MCP integrations connecting AI agents to SQL-backed hospital databases with 100+ relational tables.",
      "Evaluated on-premise NVIDIA H100 and L4 GPU deployment paths and benchmarked Qwen 3, Llama 4, and DeepSeek-V4 for latency and performance tradeoffs.",
      "Documented DPDP Act 2023 and ABDM-aligned architecture decisions to support enterprise-ready AI adoption in healthcare.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Project Alpha",
    description:
      "A web app for visualizing personalized analytics data using the latest modern stack. Connects to APIs, processes data in real time, and presents it in a beautiful dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    github: "#",
    external: "#",
    isLeft: true,
  },

  {
    title: "Project Beta",
    description:
      "A full-stack e-commerce platform with product management, cart system, and payment integration. Built with performance and accessibility in mind.",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    github: "#",
    external: "#",
    isLeft: false,
  },

  {
    title: "Project Gamma",
    description:
      "An open-source developer tool that automatically generates documentation from code comments, saving teams hours of manual documentation work.",
    tech: ["TypeScript", "AST parsing", "Markdown", "CLI"],
    github: "#",
    external: "#",
    isLeft: true,
  },
];

export const otherProjects = [
  {
    title: "Dev Tool CLI",
    tech: ["Node.js", "Commander"],
    desc: "A command-line tool to scaffold projects and automate repetitive dev tasks.",
    github: "#",
    external: "#",
  },

  {
    title: "Weather Dashboard",
    tech: ["React", "OpenWeather"],
    desc: "Real-time weather app with 7-day forecasts and interactive maps.",
    github: "#",
    external: null,
  },

  {
    title: "Markdown Editor",
    tech: ["Vite", "CodeMirror"],
    desc: "In-browser markdown editor with live preview and export to PDF.",
    github: "#",
    external: "#",
  },
];

export const email = "hello@yourportfolio.dev";
