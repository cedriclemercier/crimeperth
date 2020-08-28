import React from "react"

import styles from "./heroBanner.module.scss"

const hero = props => {
  const { size } = props

  return (
    <div
      className={[
        props.size === "small" ? styles.small : styles.large,
        styles.heroContainer,
      ].join(" ")}
    >
      <div className={styles.overlayContainer}>
        <div className={styles.hero}>{props.children}</div>
      </div>
    </div>
  )
}

export default hero
