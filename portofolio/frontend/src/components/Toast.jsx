import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

let toastId = 0
const listeners = new Set()

export function showToast(message, type = 'success', duration = 3000) {
  const id = ++toastId
  listeners.forEach(fn => fn({ id, message, type, duration }))
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    setToasts(prev => [...prev, toast])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== toast.id))
    }, toast.duration)
  }, [])

  useEffect(() => {
    listeners.add(addToast)
    return () => listeners.delete(addToast)
  }, [addToast])

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const colors = {
    success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    error: 'border-red-500/30 bg-red-500/10 text-red-400',
    info: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            onClick={() => removeToast(toast.id)}
            className={`px-4 py-3 rounded-xl border backdrop-blur-xl cursor-pointer text-sm font-medium ${colors[toast.type] || colors.info}`}
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
