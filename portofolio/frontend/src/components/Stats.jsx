import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCloud, FiPenTool } from 'react-icons/fi'

const stats = [
  { icon: FiCode, value: '4', label: 'Projects Completed' },
  { icon: FiServer, value: '6', label: 'Technologies Mastered' },
  { icon: FiDatabase, value: '0', label: 'AI Projects' },
  { icon: FiCloud, value: '0', label: 'Cloud Deployments' },
  { icon: FiPenTool, value: '1', label: 'UI/UX Projects' },
]

export default function Stats() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-4 sm:p-6 text-center"
              >
                <div className="flex justify-center mb-3 text-primary">
                  <Icon size={24} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                   className="text-2xl sm:text-3xl font-bold gradient-text mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
