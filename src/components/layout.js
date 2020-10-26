import React from "react"
import PropTypes from "prop-types"

import Header from '../components/header.js';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="pt-20 bg-gray-500 h-auto">
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
