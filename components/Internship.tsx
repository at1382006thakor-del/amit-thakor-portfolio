"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { INTERNSHIP_DATA } from "@/lib/constants";
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Cpu } from "lucide-react";

export default function Internship() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PRACTICAL EXPERIENCE"
          title="Internship & Industry Training"
          subtitle="Real-world engineering experience in data preprocessing, dashboard creation, machine learning modeling, and AI integration."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {INTERNSHIP_DATA.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {internship.role}
                    </h3>
                  </div>

                  <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-2">
                    {internship.organization}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{internship.duration}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{internship.location}</span>
                  </div>
                </div>
              </div>

              {/* Featured Internship Project */}
              <div className="mt-6 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <Layers className="w-4 h-4" />
                  Primary Project Handled: {internship.project.name}
                </div>
                <p className="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {internship.project.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                  Key Tasks & Responsibilities Executed
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {internship.responsibilities.map((resp, rIndex) => (
                    <div
                      key={rIndex}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  Stack Utilized:
                </span>
                {internship.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
