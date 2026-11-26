import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import ProjectsSection from '../components/Projects'
import Certifications from '../components/Certifications'
import ContactSection from '../components/Contact'

export default function Home() {
  useDocumentTitle()

  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <ProjectsSection />
      <Certifications />
      <ContactSection />
    </>
  )
}
