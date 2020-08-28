import React from "react"
import { Link } from "gatsby"

import styles from "./DefaultButton.module.scss"

const DefaultButton = props => {
  if (props.to.slice(0, 3) === "tel") {
    return (
      <a className={styles.button} href={props.to}>
        {props.children}
      </a>
    )
  }

  return (
    <Link
      className={styles.button}
      to={props.to}
      activeClassName={styles.active}
    >
      {props.children}
    </Link>
  )
}

export default DefaultButton
