import React from "react"

const Section = ({ section, children, color, width }) => {
  return (
    <section className={`w-full ${color ? "bg-gray-100" : ""} ${section}`}>
      <div className={`max-w-${width} mx-auto px-4 py-24 lg:py-48`}>
        {children}
      </div>
    </section>
  )
}

export default Section
