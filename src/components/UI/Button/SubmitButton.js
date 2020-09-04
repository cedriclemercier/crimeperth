import React from "react"

import styles from "./SubmitButton.module.scss"

const SubmitButton = props => (
  <button onClick={props.onClick} className={styles.button} {...props}>
    {props.children}
  </button>
)

export default SubmitButton
