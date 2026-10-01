"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";
import { PERSONAL_INFO } from "@/lib/constants";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Terminal as TerminalIcon,
  Database,
  Brain,
  Code2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/15 dark:bg-indigo-500/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Final-Year B.E. IT Student & Aspiring AI/Data Engineer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-gradient font-black">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.headline}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I build data-driven solutions, intelligent applications, and
              modern web experiences using Python, analytics, AI/ML, and web
              technologies.
            </p>

            {/* Hero Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/25 hover:scale-105 transition-all duration-200"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                Download Resume
              </a>
            </div>

            {/* Social Links & Quick Badge */}
            <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block">
                  Connect With Me
                </span>
                <SocialLinks />
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Available for Internships & Roles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Terminal & Tech Cards Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Animated Technology Floating Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 z-20 px-3.5 py-2 rounded-xl glass-panel bg-white/90 dark:bg-slate-900/90 shadow-xl border border-blue-500/30 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400"
              >
                <Brain className="w-4 h-4 text-blue-500" />
                <span>Gemini & XGBoost Models</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 z-20 px-3.5 py-2 rounded-xl glass-panel bg-white/90 dark:bg-slate-900/90 shadow-xl border border-cyan-500/30 flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400"
              >
                <TrendingUp className="w-4 h-4 text-cyan-500" />
                <span>Pandas & Power BI Analytics</span>
              </motion.div>

              {/* Central Code Terminal Card */}
              <div className="rounded-2xl glass-panel bg-slate-950/90 text-slate-200 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Terminal Titlebar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>amit_thakor_analytics.py</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono">
                    Python 3.11
                  </span>
                </div>

                {/* Terminal Code Preview */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
                  <div className="text-slate-500">
                    # Initialize Data & AI Analytics Pipeline
                  </div>
                  <div>
                    <span className="text-purple-400">import</span> pandas{" "}
                    <span className="text-purple-400">as</span> pd
                    <br />
                    <span className="text-purple-400">import</span> xgboost{" "}
                    <span className="text-purple-400">as</span> xgb
                    <br />
                    <span className="text-purple-400">from</span> google.genai{" "}
                    <span className="text-purple-400">import</span> Client
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-blue-400">developer</span> = &#123;
                    <br />
                    &nbsp;&nbsp;&quot;<span className="text-emerald-300">name</span>
                    &quot;: &quot;<span className="text-amber-300">Amit Kumar Thakor</span>&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;<span className="text-emerald-300">degree</span>
                    &quot;: &quot;<span className="text-amber-300">B.E. IT (Final Year)</span>&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;<span className="text-emerald-300">specialization</span>
                    &quot;: [&quot;<span className="text-cyan-300">Data Analytics</span>&quot;, &quot;<span className="text-cyan-300">AI/ML</span>&quot;],
                    <br />
                    &nbsp;&nbsp;&quot;<span className="text-emerald-300">location</span>
                    &quot;: &quot;<span className="text-amber-300">Gujarat, India</span>&quot;,
                    <br />
                    &#125;
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-300 font-semibold">
                      generate_insights
                    </span>
                    (dataset):
                    <br />
                    &nbsp;&nbsp;df = pd.read_csv(dataset)
                    <br />
                    &nbsp;&nbsp;model = xgb.XGBRegressor().fit(df.X, df.y)
                    <br />
                    &nbsp;&nbsp;return model.predict(df.future_sales)
                  </div>

                  {/* Terminal Execution Status */}
                  <div className="mt-4 p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-between text-blue-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                      <span className="font-sans text-xs">Model Accuracy: 94.8%</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Status: Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
