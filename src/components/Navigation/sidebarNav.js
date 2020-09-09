import React from "react"

import NavigationItems from "./NavigationItems"
import { IoIosClose } from "react-icons/io"
import styles from "./sidebarNav.module.scss"

const SidebarNav = props => {
  let classes = [styles.sidebar, styles.close]

  if (props.show) {
    classes = [styles.sidebar, styles.open]
  }

  return (
    <div className={classes.join(" ")}>
      <div style={{ textAlign: "right" }}>
        <IoIosClose
          onClick={props.sidebarClose}
          style={{
            fontSize: 44,
            cursor: "pointer",
            textAlign: "right",
            marginRight: 10,
          }}
        />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SidebarNav
