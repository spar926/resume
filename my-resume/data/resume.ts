import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  name: "Ally Park",
  title: "Software Engineer",
  summary:
    "Hi 👋 I'm Ally and I graduated from Emory University summer of 2025! Nice to meet you 😊",
  experiences: [
    {
      company: "NCR Voyix",
      role: "Software Engineer",
      start: "July 2025",
      end: "Present",
      bullets: ["Work on posless adapter team", "Automation tests"],
      tech: ["Typescript", "NestJS", "Kubernetes", "Gherkin"],
    },
  ],
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "Kubernetes",
    "Docker",
    "Gherkin",
  ],
  education: [
    {
      school: "Emory University",
      degree: "Computer Science & Mathematics",
      gradYear: "May 2025",
    },
  ],
};
