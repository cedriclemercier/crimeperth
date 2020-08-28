import React from "react"

import styles from "./infoBanner.module.scss"

const info = props => {
  return <div className={styles.infoContainer}>{props.children}</div>
}

export default info
