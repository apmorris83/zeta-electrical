import React from "react"
import Section from "../components/section.js"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const Index = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Section>
        <h1 className="text-base lg:text-2xl">About section 1</h1>
        <div className="h-screen"></div>
      </Section>
      <Section>
        <h1 className="text-base lg:text-2xl">About section 2</h1>
        <div className="h-screen"></div>
      </Section>
    </Layout>
  )
}

export default Index