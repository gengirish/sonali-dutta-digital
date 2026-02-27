"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/data/resume-data";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-28 relative" ref={ref}>
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
            Client Voices
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-xl bg-auto-carbon border border-auto-asphalt card-hover-auto overflow-hidden"
            >
              <div className="h-px w-full bg-gradient-to-r from-auto-red/40 via-auto-red/10 to-transparent" />

              <div className="p-6">
                <svg className="w-8 h-8 text-auto-red/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-auto-asphalt">
                  <div
                    className="w-9 h-9 rounded-lg bg-auto-red/10 flex items-center justify-center text-auto-red text-xs font-bold"
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {testimonial.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
