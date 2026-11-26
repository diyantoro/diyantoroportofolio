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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pb-20 md:pb-24 text-center">
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

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="64" height="64" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="5" width="76" height="50" rx="5" fill="#222" />
          <rect x="15" y="8" width="70" height="40" rx="2" fill="#0F0F23" />

          <line x1="20" y1="14" x2="80" y2="14" stroke="#c084fc" strokeWidth="1.5" opacity="0.7" />
          <line x1="20" y1="19" x2="58" y2="19" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6" />
          <line x1="20" y1="24" x2="72" y2="24" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5" />
          <line x1="20" y1="29" x2="55" y2="29" stroke="#34d399" strokeWidth="1.5" opacity="0.5" />
          <line x1="20" y1="34" x2="65" y2="34" stroke="#f87171" strokeWidth="1.5" opacity="0.4" />
          <line x1="20" y1="39" x2="50" y2="39" stroke="#60a5fa" strokeWidth="1.5" opacity="0.3" />

          <motion.text
            x="50" y="32" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fbbf24" opacity="0.9"
            animate={{ opacity: [0.9, 0.15, 0.9] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >{`</>`}</motion.text>

          <path d="M8 55 L50 55 L50 60 L8 60 Z" fill="#3D3D3D" />
          <path d="M50 55 L92 55 L92 60 L50 60 Z" fill="#3D3D3D" />
          <rect x="8" y="55" width="84" height="5" rx="1" fill="#3D3D3D" />
          <rect x="42" y="60" width="16" height="3" rx="1" fill="#333" />

          <rect x="14" y="56" width="72" height="3" rx="0.5" fill="#555" />
          <rect x="18" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="24" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="30" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="36" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="42" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="48" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="54" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="60" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="66" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="72" y="56.5" width="4" height="2" rx="0.3" fill="#777" />
          <rect x="78" y="56.5" width="4" height="2" rx="0.3" fill="#777" />

          <motion.rect
            x="20" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          />
          <motion.rect
            x="28" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
          />
          <motion.rect
            x="36" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.05 }}
          />
          <motion.rect
            x="44" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.15 }}
          />
          <motion.rect
            x="52" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.07 }}
          />
          <motion.rect
            x="60" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.12 }}
          />
          <motion.rect
            x="68" y="57" width="3" height="1.5" rx="0.3" fill="#60a5fa"
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.03 }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
