import React from "react"
import { FaChevronDown } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./navigationItem.module.scss"

const NavigationItem = props => {
  return (
    <li className={styles.navigationItem}>
      <AniLink fade to={props.link} duration={.5} activeClassName={styles.active}>
        {props.label}{" "}
        {props.child && (
          <FaChevronDown
            style={{ color: "#B11F24", fontSize: 15, paddingTop: 5 }}
          />
        )}
      </AniLink>
      {props.children}
    </li>
  )
}

export default NavigationItem
