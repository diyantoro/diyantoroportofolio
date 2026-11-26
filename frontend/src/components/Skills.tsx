import { useState } from 'react'
import { m } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiCode,
  FiTool,
  FiPenTool,
  FiTerminal,
  FiLock,
  FiLayers,
  FiZap,
  FiMessageSquare,
  FiEdit,
  FiLayout,
  FiBox,
  FiGitBranch,
  FiCompass,
  FiCheckCircle,
  FiUsers,
} from 'react-icons/fi'
import { FaAws, FaJava } from 'react-icons/fa'
import {
  SiBootstrap,
  SiCanva,
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLaragon,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPytorch,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVite,
  SiVscodium,
  SiVuedotjs,
} from 'react-icons/si'

interface SkillIconConfig {
  Icon: IconType
  color: string
}

/** Brand icons with their official colors, so logos keep their original shape. */
const iconMap: Record<string, SkillIconConfig> = {
  HTML5: { Icon: SiHtml5, color: '#E34F26' },
  CSS3: { Icon: SiCss, color: '#1572B6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952B3' },
  'Vue.js': { Icon: SiVuedotjs, color: '#42B883' },
  Vite: { Icon: SiVite, color: '#646CFF' },
  'Responsive Design': { Icon: FiMonitor, color: '#38BDF8' },

  PHP: { Icon: SiPhp, color: '#777BB4' },
  Laravel: { Icon: SiLaravel, color: '#FF2D20' },
  Golang: { Icon: SiGo, color: '#00ADD8' },
  Java: { Icon: FaJava, color: '#F89820' },
  Python: { Icon: SiPython, color: '#3776AB' },
  'REST API': { Icon: FiCode, color: '#60A5FA' },
  'JWT Authentication': { Icon: FiLock, color: '#FBBF24' },
  'MVC Architecture': { Icon: FiLayers, color: '#A78BFA' },

  MySQL: { Icon: SiMysql, color: '#4479A1' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  'Database Design': { Icon: FiDatabase, color: '#38BDF8' },
  SQL: { Icon: FiDatabase, color: '#38BDF8' },

  'Generative AI': { Icon: FiZap, color: '#F472B6' },
  'Large Language Models (LLM)': { Icon: FiMessageSquare, color: '#34D399' },
  'Prompt Engineering': { Icon: FiEdit, color: '#FBBF24' },
  'Scikit-Learn': { Icon: SiScikitlearn, color: '#F7931E' },
  TensorFlow: { Icon: SiTensorflow, color: '#FF6F00' },
  PyTorch: { Icon: SiPytorch, color: '#EE4C2C' },
  'OpenAI API': { Icon: SiOpenai, color: '#10A37F' },
  LangChain: { Icon: SiLangchain, color: '#8B949E' },

  'AWS EC2': { Icon: FaAws, color: '#FF9900' },
  'AWS S3': { Icon: FaAws, color: '#FF9900' },
  'AWS IAM': { Icon: FaAws, color: '#FF9900' },
  'AWS RDS': { Icon: FaAws, color: '#FF9900' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Redis: { Icon: SiRedis, color: '#DC382D' },
  RabbitMQ: { Icon: SiRabbitmq, color: '#FF6600' },
  Nginx: { Icon: SiNginx, color: '#009639' },
  'Linux Server': { Icon: SiLinux, color: '#FCC624' },

  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: '#8B949E' },
  'VS Code': { Icon: SiVscodium, color: '#007ACC' },
  Laragon: { Icon: SiLaragon, color: '#E10098' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  'MySQL Workbench': { Icon: SiMysql, color: '#4479A1' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  Canva: { Icon: SiCanva, color: '#00C4CC' },

  'UI/UX Design': { Icon: FiPenTool, color: '#F472B6' },
  Wireframing: { Icon: FiLayout, color: '#A78BFA' },
  Prototyping: { Icon: FiBox, color: '#34D399' },
  'User Research': { Icon: FiUsers, color: '#60A5FA' },
  'User Flow': { Icon: FiGitBranch, color: '#38BDF8' },
  'Design Thinking': { Icon: FiCompass, color: '#FBBF24' },
  'Usability Testing': { Icon: FiCheckCircle, color: '#4ADE80' },
}

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  icon: IconType
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
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

function SkillIcon({ name }: { name: string }) {
  const { Icon, color } = iconMap[name] ?? { Icon: FiTerminal, color: '#94A3B8' }
  return <Icon size={16} style={{ color }} className="shrink-0" aria-hidden="true" />
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].title)
  const current = skillCategories.find((category) => category.title === active)

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
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </m.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter skill categories">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActive(category.title)}
                aria-pressed={active === category.title}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === category.title
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-card text-muted hover:text-white hover:bg-hover'
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {category.title}
              </button>
            )
          })}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {current?.skills.map((skill, i) => (
            <m.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="glass-card p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <SkillIcon name={skill.name} />
                  {skill.name}
                </span>
                <span className="text-xs text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <m.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="progress-fill"
                />
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
