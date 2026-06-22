import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold gradient-text">Diyantoro</Link>
            <p className="text-muted mt-3 text-sm leading-relaxed max-w-md">
              Fullstack Developer & AI Enthusiast. Building modern web applications with cutting-edge technology.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/diyantoro" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-card rounded-lg hover:bg-primary/20 transition-colors text-muted hover:text-primary">
                <FiGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/diyan-toro-79466a387" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-card rounded-lg hover:bg-primary/20 transition-colors text-muted hover:text-primary">
                <FiLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/_diyyant" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-card rounded-lg hover:bg-primary/20 transition-colors text-muted hover:text-primary">
                <FiInstagram size={18} />
              </a>
              <a href="mailto:diyantoro@email.com"
                className="p-2 bg-card rounded-lg hover:bg-primary/20 transition-colors text-muted hover:text-primary">
                <FiMail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted hover:text-primary transition-colors">Home</Link>
              <Link to="/projects" className="block text-sm text-muted hover:text-primary transition-colors">Projects</Link>
              <Link to="/contact" className="block text-sm text-muted hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="space-y-2">
              {['React', 'Golang', 'Laravel', 'Python', 'AWS', 'Docker'].map(tech => (
                <p key={tech} className="text-sm text-muted">{tech}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted">
          <p className="flex items-center justify-center gap-1">
            &copy; {year} Diyantoro. Made with <FiHeart className="text-red-500" /> using React & Golang
          </p>
        </div>
      </div>
    </footer>
  )
}
