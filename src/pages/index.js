import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Image from "../components/image.js"
import Section from "../components/section.js"

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <h1 className="text-base lg:text-2xl">index</h1>
        <div className="h-screen">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Index
