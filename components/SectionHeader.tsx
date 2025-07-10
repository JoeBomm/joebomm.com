interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({title}: SectionHeaderProps) {
  return (
    <>
      <div className="text-2xl text-heading">{title}</div>
    </>
  )
}