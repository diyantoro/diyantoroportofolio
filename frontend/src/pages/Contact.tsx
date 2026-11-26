import Contact from '../components/Contact'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function ContactPage() {
  useDocumentTitle('Contact', 'Contact Diyantoro for web, backend, and AI project collaborations.')

  return (
    <div className="pt-24 pb-10 min-h-screen">
      <Contact />
    </div>
  )
}
