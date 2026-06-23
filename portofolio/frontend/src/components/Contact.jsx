import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { showToast } from './Toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 1000))
      showToast('Pesan berhasil dikirim!', 'success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      showToast('Gagal mengirim pesan.', 'error')
    } finally {
      setLoading(false)
    }
  }

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
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's talk</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-dark border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-dark border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="email@anda.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subjek</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-dark border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Kolaborasi Proyek" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 bg-dark border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  placeholder="Ceritakan tentang proyek Anda..." />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3 bg-primary hover:bg-primary/90 rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                {loading ? 'Mengirim...' : <><FiSend size={16} /> Kirim Pesan</>}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl text-primary"><FiMail size={18} /></div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Email</h4>
                  <p className="text-xs sm:text-sm text-muted">diyantoro@email.com</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl text-primary"><FiMapPin size={18} /></div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Lokasi</h4>
                  <p className="text-xs sm:text-sm text-muted">Indonesia</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl text-primary"><FiPhone size={18} /></div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Telepon</h4>
                  <p className="text-xs sm:text-sm text-muted">+62 8xx-xxxx-xxxx</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
