"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
  showResume?: boolean;
}

export default function SocialLinks({
  iconSize = 20,
  className = "",
  showResume = true,
}: SocialLinksProps) {
  const links = [
    {
      name: "GitHub",
      href: PERSONAL_INFO.githubUrl,
      icon: Github,
      color: "hover:text-slate-900 dark:hover:text-white hover:border-slate-400",
    },
    {
      name: "LinkedIn",
      href: PERSONAL_INFO.linkedinUrl,
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500",
    },
    {
      name: "Email",
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: "hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500",
    },
  ];

  if (showResume) {
    links.push({
      name: "Resume",
      href: PERSONAL_INFO.resumeUrl,
      icon: FileText,
      color: "hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500",
    });
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={`Visit Amit's ${link.name}`}
            className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 ${link.color} transition-all duration-200 hover:scale-105 shadow-sm`}
          >
            <IconComponent size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
