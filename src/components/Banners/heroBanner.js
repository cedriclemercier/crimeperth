import React from "react"

import styles from "./heroBanner.module.scss"

const hero = props => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlayContainer}>
        <div className={styles.hero}>{props.children}</div>
      </div>
    </div>
  )
}

export default hero
