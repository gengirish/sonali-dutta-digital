"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experience } from "@/data/resume-data";

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
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
            HR & Coaching Journey
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group"
              >
                <div
                  className="rounded-xl bg-auto-carbon border border-auto-asphalt overflow-hidden card-hover-auto cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-black shrink-0"
                          style={{ backgroundColor: `${exp.domainColor}20`, color: exp.domainColor }}
                        >
                          {exp.epoch.toString().padStart(2, "0")}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-zinc-500">
                            <span style={{ color: exp.domainColor }}>{exp.company}</span>
                            {" "}&middot; {exp.period}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span
                            className="px-3 py-1 text-xs rounded-full border font-mono"
                            style={{
                              color: exp.domainColor,
                              borderColor: `${exp.domainColor}30`,
                              backgroundColor: `${exp.domainColor}08`,
                            }}
                          >
                            {exp.domain}
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-auto-asphalt text-zinc-500 font-mono">
                            {exp.phase}
                          </span>
                        </div>

                        <svg
                          className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex-1 max-w-xs">
                        <div className="h-1.5 rounded-full bg-auto-asphalt overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${exp.accuracy}%` } : {}}
                            transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: exp.domainColor }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">
                        {exp.accuracy}% impact maturity
                      </span>
                    </div>

                    <p className="text-sm text-zinc-400">{exp.description}</p>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-6 md:px-8 pb-8 border-t border-auto-asphalt pt-6"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-600 mb-4">
                            Key Highlights
                          </h4>
                          <ul className="space-y-3">
                            {exp.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
                                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: exp.domainColor }} />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-600 mb-4">
                            Methods & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1.5 text-xs rounded-lg bg-[#0a0a0a] border border-auto-asphalt text-zinc-400"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
