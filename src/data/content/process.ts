export type ProcessStage = {
  index: string;
  name: "Discover" | "Research" | "Design" | "Build" | "Deploy" | "Grow";
  description: string;
  deliverables: string[];
};

export const processStages: ProcessStage[] = [
  {
    index: "01",
    name: "Discover",
    description:
      "We sit with your team before we open an editor. Goals, constraints, and what success actually looks like — defined before anything is built.",
    deliverables: ["Discovery document", "Success metrics", "Scope of work"],
  },
  {
    index: "02",
    name: "Research",
    description:
      "Your customers, your competitors, and your market — mapped, so every decision that follows is informed rather than guessed.",
    deliverables: ["Competitive audit", "Customer insight", "Technical assessment"],
  },
  {
    index: "03",
    name: "Design",
    description:
      "Wireframes become interfaces, interfaces become prototypes, and prototypes get tested against real users before a line of production code is written.",
    deliverables: ["UX architecture", "Interface design", "Validated prototype"],
  },
  {
    index: "04",
    name: "Build",
    description:
      "Engineering, at the standard we'd want for our own product — tested, secure, and built to perform under real traffic, not demo conditions.",
    deliverables: ["Production codebase", "Automated tests", "Security review"],
  },
  {
    index: "05",
    name: "Deploy",
    description:
      "Infrastructure, monitoring, and training — so launch day is a formality, not a fire drill.",
    deliverables: ["Infrastructure setup", "Analytics & monitoring", "Team onboarding"],
  },
  {
    index: "06",
    name: "Grow",
    description:
      "The system keeps learning after launch. We optimise, automate, and iterate against real usage — growth is a phase, not a finish line.",
    deliverables: ["Performance optimisation", "Ongoing automation", "Quarterly review"],
  },
];
