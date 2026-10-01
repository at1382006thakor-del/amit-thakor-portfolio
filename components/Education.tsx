"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { EDUCATION_DATA } from "@/lib/constants";
import { GraduationCap, MapPin, Calendar, BookOpen, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education Timeline"
          subtitle="Formal engineering education laying the foundation for computer science fundamentals, data analytics, and artificial intelligence."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 -translate-x-1/2" />

          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-white dark:ring-slate-900">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-10 md:even:ml-auto md:even:pl-10 md:even:pr-0">
                <div className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {item.status}
                    </span>

                    {item.period && (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                    {item.degree}
                  </h3>

                  <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    {item.institution}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coursework & Subjects */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-1.5 mb-3">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      Core Coursework & Subjects Covered
                    </h5>

                    <div className="flex flex-wrap gap-1.5">
                      {item.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
