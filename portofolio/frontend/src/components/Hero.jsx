import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import TypeAnimation from '../utils/TypeAnimation'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4"
          >
            <span className="gradient-text">Diyantoro</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-light mb-6 h-8"
          >
            <TypeAnimation />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Saya adalah seorang Fullstack Developer yang memiliki pengalaman dalam pengembangan
            aplikasi web modern menggunakan React, Golang, PHP, Laravel, Java, Python, serta
            teknologi AI seperti Machine Learning, Large Language Models (LLM), dan Prompt Engineering.
            Saya juga memiliki pemahaman mengenai Cloud Computing menggunakan AWS untuk membangun
            aplikasi yang scalable dan efisien.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="/cvdiyan.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primary hover:bg-primary/90 rounded-xl font-medium text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-primary/25">
              <FiExternalLink size={16} /> View CV
            </a>
            <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-card hover:bg-hover rounded-xl font-medium text-sm sm:text-base transition-all border border-border">
              <FiExternalLink size={16} /> View Projects
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-card hover:bg-hover rounded-xl font-medium text-sm sm:text-base transition-all border border-border">
              Contact Me <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
