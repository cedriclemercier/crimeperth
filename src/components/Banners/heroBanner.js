import React from "react"
import herovideo from "../../images/hero-banner.mp4"

import styles from "./heroBanner.module.scss"

const hero = props => {
  const { size } = props

  let video = (
    <video className="video" width="100%" autoPlay loop muted>
      <source src={herovideo} type="video/mp4" />
    </video>
  )

  return (
    <div
      className={[
        props.size === "small" ? styles.small : styles.large,
        styles.heroContainer,
      ].join(" ")}
    >
      {props.size === "large" && video}
      <div className={styles.overlayContainer}>
        <div className={styles.hero}>{props.children}</div>
      </div>
    </div>
  )
}

export default hero
