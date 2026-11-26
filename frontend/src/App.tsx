import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LazyMotion, MotionConfig, domMax } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import ToastContainer from './components/Toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundElements from './components/BackgroundElements'
import Home from './pages/Home'
import ContactPage from './pages/Contact'

const ProjectsPage = lazy(() => import('./pages/Projects'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-live="polite">
      <span className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domMax} strict>
        <MotionConfig reducedMotion="user">
          <ScrollToTop />
          <ToastContainer />
          <BackgroundElements />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  )
}

export default App
