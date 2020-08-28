import React from "react"
import { Link } from "gatsby"
import { IoIosArrowForward } from "react-icons/io"

import styles from "./SubnavigationItem.module.scss"

const SubNavigationItem = props => {
  return (
    <li className={styles.item}>
      <Link to={props.link}>
        <IoIosArrowForward
          onClick={props.sidebarClose}
          color="#B11F24"
          style={{
            fontSize: 14,
          }}
        />
        {props.children}
      </Link>
    </li>
  )
}

export default SubNavigationItem
