"use client";

import { motion } from 'framer-motion'
import { Handshake, Compass, PenTool, RefreshCcw, Cpu, Monitor } from 'lucide-react'
import React from 'react'

function AboutSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
        About our Studio
      </h2>
      <p className="text-md sm:text-md font-extrabold text-slate-400 text-center mb-12">How we design, build, and deliver timeless experiences.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Compass className="h-8 w-8 text-sky-500" />,
            title: "Our Philosophy",
            description:
              "We blend nostalgia with innovation—creating games inspired by classics from the 2000s, reimagined for today.",
          },
          {
            icon: <PenTool className="h-8 w-8 text-sky-500" />,
            title: "Design First",
            description:
              "Storytelling and gameplay come before graphics. We focus on experiences that matter.",
          },
          {
            icon: <RefreshCcw className="h-8 w-8 text-sky-500" />,
            title: "Iterative Development",
            description:
              "We build, test, and refine quickly—guided by player feedback to deliver the best possible experience.",
          },
          {
            icon: <Handshake className="h-8 w-8 text-sky-500" />,
            title: "Community Driven",
            description:
              "Our players help shape the future of our games. Collaboration is at the heart of Shocked Future Studios.",
          },
          {
            icon: <Cpu className="h-8 w-8 text-sky-500" />,
            title: "Era-Authentic Development",
            description:
              "While our games launch on modern platforms, we develop using tools and workflows from the era that inspired them—capturing the spirit of the originals.",
          },
          {
            icon: <Monitor className="h-8 w-8 text-sky-500" />,
            title: "Accessible Performance",
            description:
              "Our games are designed to run smoothly on even the lowest-end modern hardware, because great experiences shouldn't require high-end specs.",
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default AboutSection