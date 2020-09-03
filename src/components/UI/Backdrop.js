import React from "react"

import styles from "./Backdrop.module.scss"

const Backdrop = props => {
  let classes = [styles.backdrop, styles.close]

  if (props.show) {
    classes = [styles.backdrop, styles.show]
  }
  return (
    <div
      className={classes.join(" ")}
      onClick={props.onPress}
      onKeyDown={props.onPress}
      role="presentation"
    ></div>
  )
}

export default Backdrop
