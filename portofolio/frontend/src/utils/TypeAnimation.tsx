import { useState, useEffect } from 'react'

const words = ['Fullstack Developer', 'Backend Engineer', 'AI Enthusiast']

export default function TypeAnimation() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout> | undefined

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex])

  return (
    <span className="gradient-text font-bold" aria-label={words[wordIndex]}>
      <span aria-hidden="true">{words[wordIndex].substring(0, charIndex)}</span>
      <span className="animate-pulse" aria-hidden="true">|</span>
    </span>
  )
}
