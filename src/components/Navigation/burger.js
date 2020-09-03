import React from "react"
import { IoMdMenu } from "react-icons/io"

import styles from "./burger.module.scss"

const Burger = props => {
  return (
    <div className={styles.burgerContainer}>
      <IoMdMenu
        onClick={props.sidebarToggle}
        className={styles.burger}
        style={{
          fontSize: 36,
          cursor: "pointer",
          textAlign: "right",
        }}
      />
    </div>
  )
}

export default Burger
