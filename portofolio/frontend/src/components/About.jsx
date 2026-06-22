import React from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiBook, FiHeart, FiTarget } from 'react-icons/fi'

const aboutItems = [
  {
    icon: FiUser,
    title: 'Biodata Singkat',
    content: 'Saya adalah seorang Fullstack Developer dan Backend Engineer dengan pengalaman dalam pengembangan aplikasi web modern. Berfokus pada teknologi React, Golang, dan AI/ML.',
  },
  {
    icon: FiBook,
    title: 'Pendidikan',
    content: 'Mahasiswa Informatika Universitas Teknologi Digital Indonesia yang fokus pada pengembangan perangkat lunak dan kecerdasan buatan.',
  },
  {
    icon: FiHeart,
    title: 'Minat Teknologi',
    content: 'Web Development, Backend Engineering, Artificial Intelligence, Machine Learning, Cloud Computing (AWS), dan DevOps.',
  },
  {
    icon: FiTarget,
    title: 'Tujuan Karier',
    content: 'Menjadi seorang Software Engineer yang ahli dalam membangun aplikasi scalable menggunakan teknologi modern dan AI.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 glass-card rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <FiUser size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Pengalaman Organisasi</h3>
              <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
                <li>Aktif dalam organisasi kemahasiswaan bidang teknologi</li>
                <li>Terlibat dalam komunitas developer dan AI</li>
                <li>Mengikuti berbagai workshop dan seminar teknologi</li>
                <li>Kontributor open source project</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
