"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredProjects } from "@/data/resume-data";

export default function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
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
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-xl bg-auto-carbon border border-auto-asphalt card-hover-auto overflow-hidden flex flex-col"
            >
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.domainColor}, ${project.domainColor}40)`,
                }}
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded border"
                    style={{
                      color: project.domainColor,
                      borderColor: `${project.domainColor}30`,
                      backgroundColor: `${project.domainColor}08`,
                    }}
                  >
                    {project.domain}
                  </span>
                  <svg
                    className="w-4 h-4 text-zinc-600 group-hover:text-auto-red transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-auto-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-600 font-mono mb-4">
                  {project.client}
                </p>
                <p className="text-sm text-zinc-400 mb-5 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="p-3 rounded-lg bg-[#0a0a0a] border border-auto-asphalt mb-5">
                  <p className="text-xs font-mono" style={{ color: project.domainColor }}>
                    ↗ {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] rounded bg-auto-asphalt text-zinc-500 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
