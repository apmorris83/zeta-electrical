import React from "react"
import PropTypes from "prop-types"

import Header from '../components/header.js';
import "./layout.css"
import "../pages/style.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
