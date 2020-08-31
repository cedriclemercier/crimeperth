import React from "react"

import styles from "./burger.module.scss"

const Burger = props => {
  return (
    <div className={styles.burgerContainer}>
      <div
        className={styles.burger}
        onClick={props.sidebarToggle}
        onKeyDown={props.sidebarToggle}
      >
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
    </div>
  )
}

export default Burger
