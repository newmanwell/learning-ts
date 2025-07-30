import { type ReactNode } from "react";

type SectionProps = {
  title?: string,
  children: ReactNode
}

// Old way
// export const Section: React.FC<{ title: string }> = ({ children, title}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>(children}</p>
//     </section>
//   )
// }

// New way

export const Section = ({ children, title = "Optional Value" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}