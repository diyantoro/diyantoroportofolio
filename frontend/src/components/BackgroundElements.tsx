/** Decorative, non-interactive background layer shared by every page. */
export default function BackgroundElements() {
  return (
    <div className="page-background" aria-hidden="true">
      <div className="bg-orb bg-orb--one" />
      <div className="bg-orb bg-orb--two" />
      <div className="bg-orb bg-orb--three" />

      <div className="bg-ring" />
      <div className="bg-dots" />

      <span className="bg-code bg-code--one">{'{ }'}</span>
      <span className="bg-code bg-code--two">{'</>'}</span>
      <span className="bg-code bg-code--three">{'///'}</span>

      <div className="bg-line bg-line--one" />
      <div className="bg-line bg-line--two" />
    </div>
  )
}
