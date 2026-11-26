import { useEffect, useState } from 'react'
import { projects as fallbackProjects } from '../data/projects'
import type { Project } from '../types'
import { get } from '../utils/api'

const useApi = import.meta.env.VITE_USE_API === 'true'

/**
 * Returns projects from the Go backend when VITE_USE_API=true.
 * Falls back to the bundled static data so the page never renders empty.
 */
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects)
  const [loading, setLoading] = useState(useApi)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!useApi) return

    let active = true
    setLoading(true)

    get<Project[]>('/projects')
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setProjects(data)
        }
      })
      .catch((err: Error) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return { projects, loading, error }
}
