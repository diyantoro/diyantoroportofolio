import { useState } from 'react'
import { m } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certificationCategories, certifications } from '../data/certifications'

export default function Certifications() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? certifications : certifications.filter((cert) => cert.category === filter)

  return (
    <section id="certifications" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title"><span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </m.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter certifications">
          {certificationCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-card text-muted hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted">No certifications in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cert, index) => (
              <m.article
                key={`${cert.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-5 sm:p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiAward size={28} aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                {cert.issuer && <p className="text-sm text-muted mb-2">{cert.issuer}</p>}
                <span className="text-xs text-primary font-medium">{cert.category}</span>
                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate: ${cert.title}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light transition-colors"
                  >
                    <FiExternalLink size={12} aria-hidden="true" /> View Certificate
                  </a>
                )}
              </m.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
