import React from "react"

import styles from "./SocialIcon.module.scss"

const SocialIcon = props => (
  <a
    className={styles.social}
    href={props.href}
    target="_blank"
    rel="noreferrer nofollow"
  >
    {props.children}
  </a>
)

export default SocialIcon
