"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/resume-data";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-carbon" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-auto-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-auto-red/20 to-transparent" />

      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] bg-auto-red blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] bg-auto-blue blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-auto-asphalt bg-auto-carbon text-xs text-zinc-500 font-mono tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-auto-green animate-pulse" />
                Available for consulting engagements
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
            >
              <span className="text-white">{personalInfo.name.split(" ")[0]}</span>
              <br />
              <span className="text-gradient-auto">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-auto-red" />
              <p className="text-lg md:text-xl text-auto-red font-medium tracking-wide">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#experience"
                className="px-6 py-3 bg-auto-red text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-all shadow-lg shadow-auto-red/20"
              >
                Explore Engagements
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold hover:border-zinc-500 hover:text-white transition-all"
              >
                Book Discovery Call
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="relative p-6 rounded-xl bg-auto-carbon border border-auto-asphalt group hover:border-auto-red/30 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-8 h-px bg-auto-red/60" />
                  <div className="absolute top-0 left-0 w-px h-8 bg-auto-red/60" />
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-mono">Scroll</span>
            <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
