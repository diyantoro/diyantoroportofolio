export interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  github_url?: string
  demo_url?: string
  image?: string
}

export interface Certificate {
  id?: number
  title: string
  issuer?: string
  category: string
  file?: string
  image?: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt?: string
  tags: string[]
  image?: string
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

export interface Message extends ContactMessage {
  id: number
  created_at: string
  updated_at: string
}

export type ToastType = 'success' | 'error' | 'info'

export interface ToastItem {
  id: number
  message: string
  type: ToastType
  duration: number
}
