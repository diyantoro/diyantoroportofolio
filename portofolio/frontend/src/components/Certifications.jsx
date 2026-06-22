import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certifications = [
  { title: 'Belajar Dasar AI', issuer: 'Dicoding', category: 'Artificial Intelligence', file: '/sertifikat_ai.pdf' },
  { title: 'Belajar Penggunaan Generative AI', issuer: 'Dicoding', category: 'Artificial Intelligence', file: '/sertifikat_generatifai.pdf' },
  { title: 'Webinar Tren Kejahatan Siber: Mengenal Dark Web untuk Pemula', issuer: 'Institut Teknologi Tangerang', category: 'Cybersecurity', file: '/SERTIFDARKWEB.PNG' },
  { title: 'Webinar Nasional Himpunan Mahasiswa Teknologi Informasi UMPWR X PERMIKOMNAS JATENG - Digital Frontier: Mengoptimalkan Teknologi AI dan Platform untuk Ekspansi Pasar Produk Ekonomi Kreatif', issuer: 'HIMATIF UMPWR & PERMIKOMNAS JATENG', category: 'Web Development', file: '/Diyantoro_sertif_jateng.pdf' },
]

const categories = ['All', 'Web Development', 'Backend Development', 'Machine Learning', 'Artificial Intelligence', 'AWS Cloud', 'Database', 'Cybersecurity']

export default function Certifications() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? certifications : certifications.filter(c => c.category === filter)

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title"><span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FiAward size={28} />
              </div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              {cert.issuer && <p className="text-sm text-muted mb-2">{cert.issuer}</p>}
              <span className="text-xs text-primary font-medium">{cert.category}</span>
              {cert.file && (
                <a href={cert.file} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light transition-colors">
                  <FiExternalLink size={12} /> Lihat Sertifikat
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
