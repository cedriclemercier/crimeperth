import React from "react"

import styles from "./whitebox.module.scss"

const whitebox = props => {
  return <div className={styles.whitebox}>{props.children}</div>
}

export default whitebox
