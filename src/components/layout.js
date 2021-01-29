import React from "react"
import PropTypes from "prop-types"

import BackgroundImage from './backgroundImage';
import "./layout.css";


const Layout = ({ children }) => {

  return (
    <BackgroundImage>
      <main>{children}</main>
    </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
