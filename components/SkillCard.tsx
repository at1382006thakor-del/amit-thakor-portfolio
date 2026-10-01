"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";
import {
  Terminal,
  Database,
  FileCode,
  FileCode2,
  Layout,
  Palette,
  Table,
  Binary,
  LineChart,
  PieChart,
  Sheet,
  Filter,
  Activity,
  Cpu,
  Zap,
  BrainCircuit,
  TrendingUp,
  Sparkles,
  Bot,
  Globe,
  Atom,
  Server,
  Layers,
  Webhook,
  DatabaseZap,
  HardDrive,
  GitBranch,
  Github,
  Code,
  BookOpen,
  HelpCircle,
} from "lucide-react";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Database,
  FileCode,
  FileCode2,
  Layout,
  Palette,
  Table,
  Binary,
  LineChart,
  PieChart,
  Sheet,
  Filter,
  Activity,
  Cpu,
  Zap,
  BrainCircuit,
  TrendingUp,
  Sparkles,
  Bot,
  Globe,
  Atom,
  Server,
  Layers,
  Webhook,
  DatabaseZap,
  HardDrive,
  GitBranch,
  Github,
  Code,
  BookOpen,
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = iconMap[skill.iconName] || HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group p-4 rounded-xl glass-panel hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <IconComponent className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h4>
          </div>
          {skill.level && (
            <span className="text-[11px] px-2 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              {skill.level}
            </span>
          )}
        </div>

        {skill.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
            {skill.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
