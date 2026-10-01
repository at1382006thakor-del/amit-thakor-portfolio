"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { HIGHLIGHT_CARDS, PERSONAL_INFO } from "@/lib/constants";
import {
  GraduationCap,
  BarChart3,
  Brain,
  Code2,
  MapPin,
  CheckCircle2,
  Target,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  BarChart3,
  Brain,
  Code2,
  MapPin,
};

export default function About() {
  const bulletPoints = [
    "Final-year B.E. Information Technology student with strong fundamentals in CS and data science.",
    "Driven by a passion for Data Analytics, Machine Learning, and practical AI application development.",
    "Proficient in Python, SQL, Pandas, NumPy, Scikit-learn, Power BI, and modern web frameworks.",
    "A continuous learner dedicated to solving real-world engineering and business problems.",
    "Hands-on experience constructing end-to-end analytical dashboards and machine learning pipelines.",
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="BACKGROUND & INTENT"
          title="About Me"
          subtitle="Combining IT engineering fundamentals with data analytics and artificial intelligence to build practical solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Detailed Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                Passionate About Data & Intelligent Systems
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {PERSONAL_INFO.shortBio}
              </p>

              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {PERSONAL_INFO.aboutDetailed}
              </p>

              {/* Bullet Key Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 space-y-3">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {HIGHLIGHT_CARDS.map((card, index) => {
              const IconComponent = iconMap[card.icon] || Sparkles;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                      {card.text}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Core Academic & Skill Pillar
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
