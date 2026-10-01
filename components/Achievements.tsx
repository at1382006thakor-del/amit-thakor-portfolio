"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ACHIEVEMENTS_DATA } from "@/lib/constants";
import { Trophy, Star, Sparkles, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="RECOGNITION & MILESTONES"
          title="Achievements & Highlights"
          subtitle="Notable milestones achieved across academic projects, technical exhibitions, internships, and open-source contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-2">
                  {achievement.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
