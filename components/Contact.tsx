"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { PERSONAL_INFO } from "@/lib/constants";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionStatus("loading");
    setErrorMessage("");

    try {
      // Frontend-only handler simulating API submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Contact Form Submitted Successfully:", data);
      setSubmissionStatus("success");
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      setSubmissionStatus("error");
      setErrorMessage("Failed to send message. Please try sending directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Contact Me"
          subtitle="Have an opportunity, internship inquiry, project idea, or data analytics question? Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                Let&apos;s Connect
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am currently in my final year of B.E. Information Technology and actively seeking full-time roles, internships, and project collaborations in Data Analytics, AI/ML, and Web Development.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Response Time Item */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">
                      Typical Response Time
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                <span className="text-xs font-semibold text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <SocialLinks />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500/30"
                          : "border-slate-300 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/30"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500/30"
                          : "border-slate-300 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/30"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Internship Opportunity / Data Analytics Project"
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-slate-300 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/30"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-slate-300 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/30"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Feedback Messages */}
                <AnimatePresence>
                  {submissionStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                    </motion.div>
                  )}

                  {submissionStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting || submissionStatus === "loading"}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 ${
                    !isValid || isSubmitting || submissionStatus === "loading"
                      ? "bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed shadow-none"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25 hover:scale-[1.01]"
                  }`}
                >
                  {submissionStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
