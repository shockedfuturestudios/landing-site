"use client";

import { motion } from 'framer-motion'
import { Code, Zap, Palette, Layout, Users, BotOff } from 'lucide-react'
import React from 'react'

function AboutSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
        About our Studio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Code className="h-8 w-8 text-sky-500" />,
            title: "A Different Approach",
            description:
              "We beileve that games don't need to be pretty to be fun. Our focus is on creating engaging gameplay experiences.",
          },
          {
            icon: <Zap className="h-8 w-8 text-sky-500" />,
            title: "Development Cycles",
            description:
              "We try to be as agile as possible, iterating quickly based on player feedback to deliver the best experience.",
          },
          {
            icon: <Users className="h-8 w-8 text-sky-500" />,
            title: "Collaborative",
            description:
              "Our players ae the heart of Shocked Future Studios, and we work closely with our community to shape the future of our games.",
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
        <motion.div
            className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4 * 0.1 }}
          >
            <div className="mb-4"><BotOff className="h-8 w-auto text-sky-500 text-red-500" /></div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Human over AI
            </h3>
            <p className="text-slate-400 font-bold">While we embrace AI as a tool to enhance our workflow, we prioritize human creativity and craftsmanship in all aspects of our game development process.</p>
          </motion.div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection