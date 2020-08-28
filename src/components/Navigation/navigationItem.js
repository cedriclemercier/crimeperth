import React from "react"
import { Link } from "gatsby"

import styles from "./navigationItem.module.scss"

const NavigationItem = props => {
  return (
    <li className={styles.navigationItem}>
      <Link to={props.link} activeClassName={styles.active}>
        {props.label}
      </Link>
      {props.children}
    </li>
  )
}

export default NavigationItem
