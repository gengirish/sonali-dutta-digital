"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, domains, certifications } from "@/data/resume-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="separator-line mb-28" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-px bg-auto-red" />
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-auto-red">
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Building human-first systems that
              <br />
              <span className="text-gradient-auto">enable belonging.</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-auto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-auto-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                9+ Years
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-5 rounded-xl bg-auto-carbon border border-auto-asphalt">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                Industry Domains
              </h4>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span
                    key={domain.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-auto-asphalt text-sm text-zinc-400"
                  >
                    <span>{domain.icon}</span>
                    {domain.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-auto-carbon border border-auto-asphalt">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-auto-red mt-2 shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">{cert.title}</p>
                      <p className="text-xs text-zinc-500">{cert.issuer} &middot; {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
