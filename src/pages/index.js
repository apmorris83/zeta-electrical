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
      <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Index
