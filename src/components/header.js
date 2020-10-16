import React from 'react';
import { Link } from 'gatsby';

import headerStyles from "./header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  )
}

export default Header;