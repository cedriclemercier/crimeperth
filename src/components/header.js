import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import NavigationItems from "./Navigation/NavigationItems"
import Burger from "./Navigation/burger"
import Sidebar from "./Navigation/sidebarNav"
import { IoLogoFacebook, IoLogoReddit } from "react-icons/io"

import Logo from "./UI/Logo"
import SocialIcon from "./Social/SocialIcon"

import styles from "./header.module.scss"

const Header = props => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarToggleHandler = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const sidebarCloseHandler = () => {
    setSidebarOpen(false)
  }

  return (
    <header className={styles.headerContainer}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <Link to="/">
              <Logo alt="Perth Crime Logo" style={styles.logo} />
            </Link>
          </div>

          <div className={[styles.tagline, styles.desktopOnly].join(" ")}>
            <h3>Experienced Bio-Recovery Technicians</h3>
            <h3>
              1300 <strong>BIO HAZ</strong>
            </h3>
          </div>

          <div className={[styles.social, styles.desktopOnly].join(" ")}>
            <SocialIcon href="https://facebook.com/forensiccleaningmelbourne">
              <IoLogoFacebook color="#a0a0a0" size={32} />
            </SocialIcon>
            <SocialIcon href="https://www.reddit.com/user/Forensic_Cleaning">
              <IoLogoReddit color="#a0a0a0" size={32} />
            </SocialIcon>
          </div>
        </div>
        <Burger sidebarToggle={sidebarToggleHandler} />
      </div>

      <Sidebar show={sidebarOpen} sidebarClose={sidebarCloseHandler}></Sidebar>

      <nav className={styles.desktopOnly}>
        <div className={[styles.nav, "container"].join(" ")}>
          <NavigationItems />
        </div>
      </nav>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
