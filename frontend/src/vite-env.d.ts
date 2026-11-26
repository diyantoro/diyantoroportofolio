/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_TARGET?: string
  readonly VITE_USE_API?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
