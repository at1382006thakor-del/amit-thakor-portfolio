"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";
import { Github, ExternalLink, GitBranch, Star, GitCommit, Code2, FolderGit2 } from "lucide-react";

export default function GithubStats() {
  // Placeholder metrics as requested
  const repoStats = [
    { label: "Featured Repositories", value: "4+", icon: FolderGit2 },
    { label: "Primary Language", value: "Python & TS", icon: Code2 },
    { label: "Open Source Commits", value: "[CONFIGURED_VIA_GITHUB]", icon: GitCommit },
    { label: "Stars Earned", value: "[PLACEHOLDER]", icon: Star },
  ];

  return (
    <section id="github" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OPEN SOURCE & CODE ACTIVITY"
          title="GitHub Developer Stats"
          subtitle="Explore code repositories, Python data analytics scripts, and machine learning prototypes hosted on GitHub."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/50 shadow-xl"
          >
            {/* Header Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md">
                  <Github className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {PERSONAL_INFO.name}&apos;s GitHub
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Data Analytics, Machine Learning & Web App Codebases
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-xs flex items-center gap-2 transition-all duration-200 shadow-md"
              >
                Visit GitHub Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              {repoStats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-center"
                  >
                    <IconComp className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Contribution Graph Mockup */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-blue-500" />
                  Contributions Activity Heatmap
                </span>
                <span>Latest Activity</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-slate-200 overflow-x-auto border border-slate-800">
                <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-max">
                  {Array.from({ length: 35 * 7 }).map((_, cellIdx) => {
                    // Generate subtle realistic heatmap green/blue colors
                    const level = (cellIdx * 13 + 7) % 5;
                    const opacity =
                      level === 0
                        ? "bg-slate-900"
                        : level === 1
                        ? "bg-emerald-950/80"
                        : level === 2
                        ? "bg-emerald-800"
                        : level === 3
                        ? "bg-emerald-600"
                        : "bg-emerald-400";
                    return (
                      <div
                        key={cellIdx}
                        className={`w-3 h-3 rounded-sm ${opacity} transition-colors`}
                        title={`Contribution level ${level}`}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400 text-right">
                * Live statistics sync automatically when configured with GitHub Username.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
