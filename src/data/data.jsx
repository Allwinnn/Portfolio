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
  { name: "GitHub", url: "https://github.com/Allwinnn", icon: GitHubIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/b-allwinraj", icon: LinkedInIcon },
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
    company: "DreamPi",
    url: "https://www.DreamPi.in/",
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
    title: "E-Commerce lamination store",
    description:
      "A full stack application for my client sai suriya laminations a online lamination  store with product management, cart system, and paymnet integration. Built with performance and accessibility in mind .",
    tech: ["React", "MongoDB", "Razorpay", "fastApi"],
    github: "https://github.com/Allwinnn/e-commerce-laminations",
    external: "#",
    isLeft: true,
  },

  {
    title: "Diabetic Retinopathy detection",
    description:
      "Built an AI-assisted diabetic retinopathy screening platform that classifies retinal fundus images into five severity stages using Efficient-net model and prioritizes patients for clinical review. Integrated a Python-based inference pipeline to return predicted class, confidence breakdown, and processed image outputs for doctor-facing explainability. Designed the system to support role-based screening workflows, report generation, and real-time triage for rural eye-care settings.",
    tech: ["Python", "Tensorflow / keras", "Effientnet Model", "MERN Stack"],
    github: "https://github.com/Allwinnn/diabetic-retinopathy-detection-application",
    external: "#",
    isLeft: false,
  },

  {
    title: "Expense Monitor",
    description:
      "An open-source developer tool that automatically generates documentation from code comments, saving teams hours of manual documentation work.",
    tech: ["TypeScript", "AST parsing", "Markdown", "CLI"],
    github: "https://github.com/Allwinnn/mern-expense-monitor",
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

export const email = "Allwinrajb@gmail.com";
