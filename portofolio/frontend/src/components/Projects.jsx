import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const allProjects = [
  {
    id: 1,
    title: 'HIMAPETRI',
    description: 'Website Himpunan Mahasiswa Peternakan (HIMAPETRI) - organisasi kemahasiswaan bidang peternakan.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    category: 'Web Development',
    github_url: 'https://github.com/diyantoro/himapetri.git',
  },
  {
    id: 2,
    title: 'Manajemen Rental Mobil',
    description: 'Aplikasi manajemen rental mobil dengan fitur booking, pembayaran, dan laporan keuangan.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    category: 'Web Development',
    github_url: 'https://github.com/diyantoro/Manejemen-Rentalmobil.git',
  },
  {
    id: 3,
    title: 'My App',
    description: 'Aplikasi web dengan fitur lengkap untuk manajemen data dan informasi.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    category: 'Web Development',
    github_url: 'https://github.com/diyantoro/my-app.git',
  },
  {
    id: 4,
    title: 'HIMAFORKA',
    description: 'Website Himpunan Mahasiswa Informatika (HIMAFORKA) - organisasi kemahasiswaan bidang informatika.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    category: 'Web Development',
    github_url: 'https://github.com/diyantoro/HIMAFORKA.git',
  },
]

const categories = ['All', 'Web Development']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter)

  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-card text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <FiFolder size={48} className="text-primary/40" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                        <FiGithub size={18} />
                      </a>
                    )}
                    <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-xs text-primary font-medium mb-2 block">{project.category}</span>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-card text-muted rounded-lg">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 rounded-xl font-medium transition-all">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
