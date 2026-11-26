import { useState, useEffect, useCallback } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import type { ToastItem, ToastType } from '../types'

let toastId = 0

type ToastListener = (toast: ToastItem) => void
const listeners = new Set<ToastListener>()

export function showToast(message: string, type: ToastType = 'success', duration = 3000) {
  const toast: ToastItem = { id: ++toastId, message, type, duration }
  listeners.forEach((listener) => listener(toast))
}

const colors: Record<ToastType, string> = {
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  error: 'border-red-500/30 bg-red-500/10 text-red-400',
  info: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = useCallback((toast: ToastItem) => {
    setToasts((prev) => [...prev, toast])
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== toast.id))
    }, toast.duration)
  }, [])

  useEffect(() => {
    listeners.add(addToast)
    return () => {
      listeners.delete(addToast)
    }
  }, [addToast])

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {toasts.map((toast) => (
          <m.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            onClick={() => removeToast(toast.id)}
            role="status"
            className={`px-4 py-3 rounded-xl border backdrop-blur-xl cursor-pointer text-sm font-medium ${colors[toast.type]}`}
          >
            {toast.message}
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
