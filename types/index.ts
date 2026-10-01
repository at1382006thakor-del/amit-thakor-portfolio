export type Category = "All" | "AI/ML" | "Data Analytics" | "Web Development";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "Programming" | "Data Analytics" | "AI / Machine Learning" | "Web Development" | "Database" | "Tools";
  iconName: string;
  description?: string;
  level?: "Advanced" | "Intermediate" | "Proficient";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  location: string;
  subjects: string[];
  description: string;
  period?: string;
}

export interface InternshipItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  project: {
    name: string;
    description: string;
  };
  technologies: string[];
  responsibilities: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  metric?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
