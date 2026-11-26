import { m } from 'framer-motion'
import { FiCode, FiCpu, FiBook, FiBriefcase, FiUsers, FiAward } from 'react-icons/fi'

const experiences = [
  {
    title: 'Web Developer Projects',
    subtitle: 'Fullstack Web Applications',
    period: '2024 - Present',
    icon: FiCode,
    items: [
      'Car Rental System - A fullstack application for car rental management',
      'HIMAFORKA - Website for the Informatics Student Association',
      'HIMAPETRI - Website for the Animal Husbandry Student Association',
      'My-App - Web application for data management',
      'Ngekos.in - Boarding-house platform for room search, booking, payments, and monitoring',
      'BuzzHub - Influencer marketing platform with campaigns, payouts, and reporting',
      'StudyBuddy AI Agent - Learning assistant with summaries, quizzes, and spaced repetition',
    ],
  },
  {
    title: 'Academic Projects',
    subtitle: 'University & Research',
    period: '2024 - Present',
    icon: FiBook,
    items: [
      'Development of web-based information systems',
      'Implementation of machine learning algorithms',
      'REST API development with Golang',
    ],
  },
  {
    title: 'Organizations',
    subtitle: 'Community & Leadership',
    period: '2025 - Present',
    icon: FiUsers,
    items: [
      'Member of the local developer community',
      'Head of the Skill Development Division, Informatics Student Association',
      'Contributor to open-source projects',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">Professional journey and achievements</p>
        </m.div>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-10 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-3 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -translate-x-1/2 mt-5 md:mt-6 border-4 border-dark z-10" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-5 sm:p-6 ml-8 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-muted">{exp.subtitle}</p>
                      </div>
                      <span className="ml-auto text-xs text-primary font-medium whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.items.map((item, j) => (
                        <li key={j} className="text-sm text-muted flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
