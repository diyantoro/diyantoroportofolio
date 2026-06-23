import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiServer, FiDatabase, FiCpu, FiCloud, FiCode, FiTool, FiPenTool, FiTerminal } from 'react-icons/fi'
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaPhp, FaJava, FaPython, FaGit, FaGithub, FaDocker, FaFigma, FaNodeJs, FaAws, FaVuejs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiLaravel, SiGo, SiMysql, SiPostgresql, SiMongodb, SiScikitlearn, SiTensorflow, SiPytorch, SiOpenai, SiLangchain, SiNginx, SiLinux, SiPostman, SiCanva, SiVite, SiRedis, SiRabbitmq, SiVscodium, SiLaragon } from 'react-icons/si'

const iconMap = {
  HTML5: FaHtml5,
  CSS3: FaCss3,
  JavaScript: FaNodeJs,
  TypeScript: SiTypescript,
  'React.js': FaReact,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: FaBootstrap,
  'Vue.js': FaVuejs,
  Vite: SiVite,
  PHP: FaPhp,
  Laravel: SiLaravel,
  Golang: SiGo,
  Java: FaJava,
  Python: FaPython,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  'Scikit-Learn': SiScikitlearn,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  'OpenAI API': SiOpenai,
  LangChain: SiLangchain,
  'AWS EC2': FaAws,
  'AWS S3': FaAws,
  'AWS IAM': FaAws,
  'AWS RDS': FaAws,
  Docker: FaDocker,
  Redis: SiRedis,
  RabbitMQ: SiRabbitmq,
  Nginx: SiNginx,
  'Linux Server': SiLinux,
  Git: FaGit,
  GitHub: FaGithub,
  'VS Code': SiVscodium,
  Laragon: SiLaragon,
  Postman: SiPostman,
  Figma: FaFigma,
  Canva: SiCanva,
}

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FiMonitor,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Vue.js', level: 75 },
      { name: 'Vite', level: 80 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: FiServer,
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 82 },
      { name: 'Golang', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'REST API', level: 88 },
      { name: 'JWT Authentication', level: 85 },
      { name: 'MVC Architecture', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 72 },
      { name: 'Database Design', level: 82 },
    ],
  },
  {
    title: 'Artificial Intelligence',
    icon: FiCpu,
    skills: [
      { name: 'Generative AI', level: 72 },
      { name: 'Large Language Models (LLM)', level: 75 },
      { name: 'Prompt Engineering', level: 80 },
    ],
  },
  {
    title: 'Cloud Computing',
    icon: FiCloud,
    skills: [
      { name: 'AWS EC2', level: 75 },
      { name: 'Docker', level: 78 },
      { name: 'Redis', level: 70 },
      { name: 'RabbitMQ', level: 65 },
      { name: 'Nginx', level: 75 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: FiCode,
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Golang', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Laragon', level: 85 },
      { name: 'Postman', level: 82 },
      { name: 'MySQL Workbench', level: 85 },
      { name: 'Figma', level: 85 },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: FiPenTool,
    skills: [
      { name: 'UI/UX Design', level: 78 },
      { name: 'Wireframing', level: 75 },
      { name: 'Prototyping', level: 72 },
      { name: 'User Research', level: 70 },
      { name: 'User Flow', level: 73 },
      { name: 'Design Thinking', level: 74 },
      { name: 'Usability Testing', level: 68 },
      { name: 'Canva', level: 80 },
    ],
  },
]

function SkillIcon({ name }) {
  const Icon = iconMap[name] || FiTerminal
  return <Icon size={14} />
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].title)
  const current = skillCategories.find(c => c.title === active)

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
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map(cat => {
            const Icon = cat.icon
            return (
              <button
                key={cat.title}
                onClick={() => setActive(cat.title)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === cat.title
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-card text-muted hover:text-white hover:bg-hover'
                }`}
              >
                <Icon size={16} />
                {cat.title}
              </button>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {current?.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="glass-card rounded-xl p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <SkillIcon name={skill.name} />
                  {skill.name}
                </span>
                <span className="text-xs text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="progress-fill"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
