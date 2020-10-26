import React from 'react';

const Section = ({ children }) => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto p-6">
        {children}
      </div>
    </section>
  )
}

export default Section;