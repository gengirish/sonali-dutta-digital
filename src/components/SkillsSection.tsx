"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/resume-data";

function GaugeRing({ percentage, color, delay, inView }: { percentage: number; color: string; delay: number; inView: boolean }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="88" height="88" className="transform -rotate-90">
      <circle cx="44" cy="44" r={radius} fill="none" stroke="#27272a" strokeWidth="4" />
      <motion.circle
        cx="44"
        cy="44"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
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
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="p-6 rounded-xl bg-auto-carbon border border-auto-asphalt card-hover-auto group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-base font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
                <GaugeRing
                  percentage={Math.min(95, 70 + i * 6)}
                  color={category.color}
                  delay={0.2 + i * 0.1}
                  inView={isInView}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 + j * 0.03 }}
                    className="px-3 py-1.5 text-xs rounded-lg border transition-all duration-300 text-zinc-400 hover:text-white"
                    style={{
                      borderColor: `${category.color}25`,
                      backgroundColor: `${category.color}08`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${category.color}60`;
                      e.currentTarget.style.backgroundColor = `${category.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${category.color}25`;
                      e.currentTarget.style.backgroundColor = `${category.color}08`;
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
