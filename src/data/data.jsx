import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";

export const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#jobs" },
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
    title: "Senior Software Engineer",
    company: "Acme Corp",
    url: "#",
    range: "Jan 2023 – Present",
    duties: [
      "Delivered high-quality, robust production code for a diverse array of projects.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Led migration of legacy REST APIs to GraphQL, reducing payload size by 40%.",
    ],
  },

  {
    title: "Software Engineer",
    company: "Tech Studio",
    url: "#",
    range: "Jun 2021 – Dec 2022",
    duties: [
      "Built and maintained multiple React applications serving 50k+ monthly users.",
      "Wrote modern, performant, maintainable code for a demanding client base.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },

  {
    title: "Junior Developer",
    company: "StartupXYZ",
    url: "#",
    range: "Jan 2020 – May 2021",
    duties: [
      "Developed and shipped highly interactive web applications using React.",
      "Worked directly with product to define and implement new features.",
      "Participated in daily standups, sprint planning, and retrospectives.",
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