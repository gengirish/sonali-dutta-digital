"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/resume-data";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="py-28 relative" ref={ref}>
      <div className="separator-line mb-28" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-auto-red" />
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-auto-red">
                Contact
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Let&apos;s create
              <br />
              <span className="text-gradient-auto">inclusive impact.</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Open to collaboration across workshops, leadership programs, speaking
              engagements, and culture transformation initiatives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-auto-carbon border border-auto-asphalt card-hover-auto group"
            >
              <div className="w-10 h-10 rounded-lg bg-auto-red/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-auto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-zinc-600 font-mono uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">{personalInfo.email}</div>
              </div>
              <svg className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-auto-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-auto-carbon border border-auto-asphalt card-hover-auto group"
            >
              <div className="w-10 h-10 rounded-lg bg-auto-blue/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-auto-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-zinc-600 font-mono uppercase tracking-wider mb-0.5">LinkedIn</div>
                <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">Connect with me</div>
              </div>
              <svg className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-auto-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-auto-carbon border border-auto-asphalt card-hover-auto group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-zinc-600 font-mono uppercase tracking-wider mb-0.5">Website</div>
                <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">Visit Youmanize</div>
              </div>
              <svg className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-auto-asphalt pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-auto-red flex items-center justify-center">
              <span className="text-white font-black text-[10px]">{personalInfo.name.charAt(0)}</span>
            </div>
            <span className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-zinc-600 font-mono">
            Next.js &middot; Tailwind CSS &middot; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
