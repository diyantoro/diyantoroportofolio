import { useState, type ChangeEvent, type FormEvent } from 'react'
import { m } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { showToast } from './Toast'
import type { ContactMessage, Message } from '../types'
import { post } from '../utils/api'

const emptyForm: ContactMessage = { name: '', email: '', subject: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormErrors = Partial<Record<keyof ContactMessage, string>>

function validate(form: ContactMessage): FormErrors {
  const errors: FormErrors = {}

  if (form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!emailPattern.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (form.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters.'
  if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'

  return errors
}

export default function Contact() {
  const [form, setForm] = useState<ContactMessage>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      showToast('Please check the form and try again.', 'error')
      return
    }

    setLoading(true)
    try {
      await post<Message>('/messages', form)
      showToast('Message sent successfully!', 'success')
      setForm(emptyForm)
      setErrors({})
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send your message.'
      showToast(message, 'error')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: keyof ContactMessage) =>
    `w-full px-4 py-3 bg-dark border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm ${
      errors[field] ? 'border-red-500/60' : 'border-border'
    }`

  return (
    <section id="contact" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's talk</p>
        </m.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} noValidate className="glass-card p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange}
                    aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={inputClass('name')} placeholder="Your name" />
                  {errors.name && <p id="contact-name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange}
                    aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={inputClass('email')} placeholder="you@example.com" />
                  {errors.email && <p id="contact-email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">Subject</label>
                <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  className={inputClass('subject')} placeholder="Project Collaboration" />
                {errors.subject && <p id="contact-subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows={5}
                  aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`${inputClass('message')} resize-none`} placeholder="Tell me about your project..." />
                {errors.message && <p id="contact-message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3 bg-primary hover:bg-primary/90 rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : <><FiSend size={16} /> Send Message</>}
              </button>
            </form>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl text-primary"><FiMail size={18} /></div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Email</h4>
                  <a href="mailto:diyantoro@email.com" className="text-xs sm:text-sm text-muted hover:text-primary transition-colors">diyantoro@email.com</a>
                </div>
              </div>
            </div>
            <div className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl text-primary"><FiMapPin size={18} /></div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Location</h4>
                  <p className="text-xs sm:text-sm text-muted">Indonesia</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl text-primary"><FiPhone size={18} /></div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Phone</h4>
                  <p className="text-xs sm:text-sm text-muted">+62 8xx-xxxx-xxxx</p>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
