"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                {PERSONAL_INFO.initials}
              </div>
              <h3 className="text-xl font-bold text-white">
                {PERSONAL_INFO.name}
              </h3>
            </div>

            <p className="text-sm font-medium text-blue-400">
              {PERSONAL_INFO.headline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {PERSONAL_INFO.shortBio}
            </p>

            <div className="pt-2">
              <SocialLinks iconSize={18} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top & Info */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-2 text-xs font-semibold"
            >
              Back to Top
              <ArrowUp className="w-4 h-4 text-blue-400" />
            </button>
            <span className="text-[11px] text-slate-500">
              Gujarat, India
            </span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Amit Kumar Thakor. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
