import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Image from "../components/image.js"

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>index</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default Index
