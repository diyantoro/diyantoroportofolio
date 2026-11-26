import { useEffect } from 'react'

const SITE_TITLE = 'Diyantoro | Portfolio'

export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Diyantoro` : SITE_TITLE

    if (description) {
      const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (meta) meta.content = description
    }
  }, [title, description])
}
