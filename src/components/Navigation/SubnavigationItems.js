import React from "react"


import styles from "./SubnavigationItems.module.scss"

const SubNavigationItems = props => {
  return <ul className={styles.subNavigationItems}>{props.children}</ul>
}

export default SubNavigationItems
