import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MonitorCheck,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Zap,
} from "lucide-react";

export const roles = [
  "Software Developer",
  "DevOps Engineer",
  "Production Engineer",
  "Cloud Enthusiast",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "Website", href: "https://your-domain.com", icon: Globe2 },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Infra", href: "#infra" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    title: "Backend",
    icon: Braces,
    skills: ["Node.js", "REST APIs", "Auth", "Caching", "Microservices"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Schema Design", "Indexing"],
  },
  {
    title: "DevOps",
    icon: ServerCog,
    skills: ["Linux", "Nginx", "Jenkins", "Observability", "Incident Response"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "VPC", "EC2", "S3", "IAM"],
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    skills: ["Git", "GitHub", "Bash", "VS Code", "Postman"],
  },
  {
    title: "CI/CD",
    icon: Workflow,
    skills: ["GitHub Actions", "Pipelines", "Quality Gates", "Preview Deploys"],
  },
  {
    title: "Containerization",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Compose", "Helm", "Container Security"],
  },
];

export const projects = [
 {
    name: "ClassCircle",
    category: "Full Stack Collaboration Platform",
    description:
      "A modern student collaboration platform that helps learners connect, share resources, manage academic discussions, and collaborate in realtime through an intuitive community-driven experience.",

    architecture:
      "React/Next.js frontend with a Node.js + Express backend, PostgreSQL database management through TypeORM, Dockerized development environment, JWT authentication, and scalable REST APIs.",

    features: [
      "Secure JWT authentication",
      "Realtime discussion & collaboration",
      "Student posts and resource sharing",
      "Role-based admin moderation",
      "Responsive premium UI/UX",
      "Protected routes and API security",
    ],

    challenges: [
      "Optimized Docker-based local development workflow",
      "Improved backend security and production configuration",
      "Structured scalable API architecture",
      "Managed database relationships and query performance",
    ],

    outcomes: [
      "Smooth and responsive student experience",
      "Production-ready full stack architecture",
      "Cleaner maintainable codebase",
      "Scalable collaboration-focused platform",
    ],

    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeORM",
      "Docker",
    ],

    github: "https://github.com/yourusername/classcircle",
    demo: "https://classcircle.example.com",
  },
  {
    name: "ReleaseForge Pipeline",
    category: "DevOps",
    description:
      "A container-first release system that promotes code from pull request to production with repeatable checks and rollback awareness.",
    architecture:
      "Docker images, Kubernetes manifests, Nginx ingress, health checks, and automated rollback strategy.",
    features: ["Blue-green deploys", "Container scanning", "Release approvals", "Runtime metrics"],
    challenges: ["Standardized environments", "Reduced manual release work", "Made rollbacks predictable"],
    outcomes: ["Repeatable preview environments", "Clear release gates", "Lower deployment risk"],
    stack: ["Docker", "Kubernetes", "Nginx", "GitHub Actions", "Linux"],
    github: "https://github.com/yourusername/releaseforge-pipeline",
    demo: "https://releaseforge.example.com",
  },
  {
    name: "CloudGuard Blueprint",
    category: "Infrastructure",
    description:
      "A secure cloud blueprint for private networking, observability, least-privilege access, and cost-aware service deployment.",
    architecture:
      "Terraform-managed AWS resources with private networking, service monitoring, and least-privilege IAM.",
    features: ["IaC modules", "Cloud monitoring", "Secret handling", "Cost visibility"],
    challenges: ["Hardened IAM boundaries", "Documented failure paths", "Balanced cost and availability"],
    outcomes: ["Reusable IaC modules", "Stronger security posture", "Observable runtime behavior"],
    stack: ["AWS", "Terraform", "CloudWatch", "Docker", "PostgreSQL"],
    github: "https://github.com/yourusername/cloudguard-blueprint",
    demo: "https://cloudguard.example.com",
  },
];

export const recruiterSignals = [
  {
    label: "Role Fit",
    value: "SWE / DevOps / Infra",
    detail: "Comfortable across product code, deployment automation, and runtime operations.",
    icon: Zap,
  },
  {
    label: "Engineering Signal",
    value: "Typed + Observable",
    detail: "Prioritizes TypeScript, clean service boundaries, logs, metrics, and rollback paths.",
    icon: MonitorCheck,
  },
  {
    label: "Hiring Readiness",
    value: "Interview-ready",
    detail: "Projects are framed by architecture, tradeoffs, outcomes, and production thinking.",
    icon: ShieldCheck,
  },
];

export const capabilityMatrix = [
  ["Frontend", "Responsive interfaces, component systems, accessibility"],
  ["Backend", "API design, auth flows, caching, relational data"],
  ["DevOps", "CI/CD, containers, Linux, reverse proxies"],
  ["Infrastructure", "Cloud networks, IaC, monitoring, operational docs"],
];

export const journey = [
  {
    year: "2026",
    title: "Job-Ready Engineering Focus",
    icon: Rocket,
    text: "Sharpening production engineering, DevOps workflows, system design, and recruiter-ready project storytelling.",
  },
  {
    year: "2025",
    title: "Computer Science Graduate",
    icon: GraduationCap,
    text: "Built strong fundamentals in algorithms, databases, networking, operating systems, and software architecture.",
  },
  {
    year: "2024",
    title: "Cloud and CI/CD Practice",
    icon: GitBranch,
    text: "Designed automated deployment paths with containers, Linux servers, and quality gates.",
  },
  {
    year: "2023",
    title: "Full-Stack Product Builder",
    icon: Layers3,
    text: "Delivered responsive interfaces, API integrations, data models, and polished user workflows.",
  },
];

export const infraSteps = [
  { label: "Plan", icon: Network, detail: "Architecture, secrets, environments" },
  { label: "Build", icon: Boxes, detail: "Typed app, tests, container image" },
  { label: "Verify", icon: ShieldCheck, detail: "Lint, scan, integration checks" },
  { label: "Release", icon: Rocket, detail: "Preview, promote, rollback strategy" },
  { label: "Observe", icon: MonitorCheck, detail: "Metrics, logs, uptime, alerts" },
];

export const stats = [
  { label: "Primary Focus", value: "SWE + DevOps" },
  { label: "Deployment Mindset", value: "Automated" },
  { label: "Availability", value: "Open to work" },
  { label: "Time Zone", value: "Asia/Dhaka" },
];
