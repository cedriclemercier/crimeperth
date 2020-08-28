import React from "react"

import styles from "./SubmitButton.module.scss"

const SubmitButton = props => (
  <button className={styles.button} {...props}>
    {props.children}
  </button>
)

export default SubmitButton
