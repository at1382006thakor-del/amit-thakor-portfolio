"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { CERTIFICATIONS_DATA } from "@/lib/constants";
import { Award, ExternalLink, Calendar, Hash } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="VERIFIED CREDENTIALS"
          title="Certifications & Training"
          subtitle="Industry certifications and skill specializations verified through course providers and training workshops."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {cert.title}
                </h3>

                <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {cert.issuer}
                </h4>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Hash className="w-3.5 h-3.5 text-slate-400" />
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  View Verified Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
