import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub, FiFolder, FiArrowLeft } from 'react-icons/fi'
import { useProjects } from '../hooks/useProjects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Projects() {
  useDocumentTitle('Projects', 'A collection of web, backend, and AI projects built by Diyantoro.')
  const { projects, loading, error } = useProjects()
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const filtered = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-6 transition-colors">
            <FiArrowLeft size={14} aria-hidden="true" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">My <span className="gradient-text">Projects</span></h1>
          <p className="text-muted mt-2 text-lg">Explore my work across different domains</p>
        </m.div>

        {error && (
          <p className="mb-6 text-sm text-amber-400" role="status">
            Could not load the latest data; showing local data. ({error})
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-card text-muted hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-hidden="true">
            {[0, 1, 2].map((item) => (
              <div key={item} className="glass-card h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <m.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <m.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`Preview of the ${project.title} project`}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full project-placeholder flex items-center justify-center">
                        <span><FiFolder size={40} className="text-primary/60" aria-hidden="true" /></span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open the GitHub repository for ${project.title}`}
                          className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open the ${project.title} demo`}
                          className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-xs text-primary font-medium mb-2 block">{project.category}</span>
                    <h2 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                    <p className="text-sm text-muted mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-card text-muted rounded-lg">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </m.article>
              ))}
            </AnimatePresence>
          </m.div>
        )}
      </div>
    </div>
  )
}
