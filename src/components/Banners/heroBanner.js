import React from "react"

import styles from "./heroBanner.module.scss"

const hero = props => {
  const { height } = props

  let video = (
    <video className="video" width="100%" autoPlay loop muted>
      <source src={props.imageUrl} type="video/mp4" />
    </video>
  )

  return (
    <div
      className={[
        height === "large" ? styles.large : styles.small,
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
