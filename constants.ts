import { Github, Linkedin, Mail, MapPin, Terminal, Database, Smartphone, Code2, Cpu, Globe } from 'lucide-react';

export const PROFILE = {
  name: "Enamul Hasan",
  tagline: "Software Engineer | Full Stack Developer | Mobile Application Developer",
  location: "Dhaka, Bangladesh",
  email: "enamulhasan248@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/enamulhasan248", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/enamulhasan248", icon: Linkedin },
    { name: "Email", url: "mailto:enamulhasan248@gmail.com", icon: Mail },
  ]
};

export const ABOUT = {
  summary: "Computer Science graduate passionate about building high-performance web and mobile applications. I combine technical expertise with strong collaboration skills to deliver seamless user experiences on time. Eager to adapt, learn, and drive team success."
};

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["Java", "Python", "C", "C++", "SQL", "PHP"]
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["Angular", "React.js", "FastAPI", "Node.js", "Django"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Android (Java/XML)"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"]
  },
  {
    title: "Professional Skills",
    icon: Cpu,
    skills: ["Technical Documentation", "Analytical Thinking", "Team Collaboration"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Jatra: Smart City Bus Tracking",
    description: "Solved chronic public transit unpredictability by engineering a location interpolation algorithm to fix GPS 'teleporting' glitches. Reduced operational costs by utilizing Firebase over standard GPS APIs.",
    tech: ["Android (Java)", "Firebase Realtime DB", "Cloud Functions"],
    image: "/jatralogo.png",
    links: { github: "#", live: "#" } // Placeholders as per prompt not having specific project URLs
  },
  {
    id: 2,
    title: "UniEvent: Campus Event Management",
    description: "Full-stack app for university events implementing RBAC for Admins/Students. Engineered a real-time QR Code Attendance System for instant webcam verification.",
    tech: ["FastAPI", "Python", "PostgreSQL", "Angular", "Bootstrap 5"],
    image: "/UniEvent_Preview.jpg",
    links: { github: "#", live: "#" }
  }
];

export const EDUCATION = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "East West University",
    year: "Graduated",
    details: "CGPA 3.77/4.00, Cum Laude",
    awards: ["100% Merit Scholarship (Top 10% students)", "Dean's Scholarship"]
  }
];

export const LANGUAGES = [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Fluent" }
];