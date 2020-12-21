import React from "react"
import PropTypes from "prop-types"

import ZetaHeader from "../components/ZetaHeader.jsx"

const Layout = ({ children }) => {
  return (
    <>
      <ZetaHeader />
      <main className="pt-24 h-auto">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
