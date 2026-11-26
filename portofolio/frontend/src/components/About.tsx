import { m } from 'framer-motion'
import { FiUser, FiBook, FiHeart, FiTarget } from 'react-icons/fi'

const aboutItems = [
  {
    icon: FiUser,
    title: 'Short Bio',
    content: "I'm a Fullstack Developer and Backend Engineer who enjoys turning ideas into fast, clean, and scalable web applications. With React and Golang as my core stack, I also explore AI and Machine Learning to build smarter products.",
  },
  {
    icon: FiBook,
    title: 'Education',
    content: 'An Informatics student at Universitas Teknologi Digital Indonesia, focusing on software development and artificial intelligence.',
  },
  {
    icon: FiHeart,
    title: 'Technology Interests',
    content: 'Web Development, Backend Engineering, AI and Machine Learning, Cloud Computing (AWS), and DevOps.',
  },
  {
    icon: FiTarget,
    title: 'Career Goal',
    content: 'To become a Software Engineer who builds scalable applications with modern technology and AI, and creates real impact for users.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Get to know me better</p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutItems.map((item, i) => {
            const Icon = item.icon
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 sm:p-6"
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
              </m.div>
            )
          })}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 glass-card p-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <FiUser size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Organizational Experience</h3>
              <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
                <li>Active in student organizations focused on technology</li>
                <li>Involved in developer and AI communities</li>
                <li>Attended various technology workshops and seminars</li>
                <li>Contributor to open-source projects</li>
              </ul>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
