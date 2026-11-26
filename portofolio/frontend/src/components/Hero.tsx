import { m } from 'framer-motion'
import { FiExternalLink, FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import TypeAnimation from '../utils/TypeAnimation'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pb-20 md:pb-24 text-center">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I'm
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4"
          >
            <span className="gradient-text">Diyantoro</span>
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-light mb-6 h-8"
          >
            <TypeAnimation />
          </m.div>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Fullstack Developer experienced in building modern web applications with React, Golang,
            Laravel, Java, and Python. I also work with AI technologies, including Machine Learning,
            Large Language Models (LLMs), and Prompt Engineering, and use AWS to build scalable,
            efficient applications.
          </m.p>
          <m.div
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
          </m.div>
        </m.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 w-max max-w-[calc(100%-2rem)] -translate-x-1/2">
        <m.a
          href="#about"
          className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-primary/30 bg-white/90 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary shadow-xl shadow-primary/20 backdrop-blur-md transition-colors hover:border-primary hover:bg-white dark:border-blue-400/40 dark:bg-slate-900/90 dark:text-blue-300 dark:shadow-black/50 dark:hover:border-blue-300 dark:hover:bg-slate-900"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll to explore
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white dark:bg-blue-400 dark:text-slate-900">
            <FiArrowDown size={12} aria-hidden="true" />
          </span>
        </m.a>
      </div>
    </section>
  )
}
