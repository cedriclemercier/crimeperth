import React from "react"
import { Link } from "gatsby"
import { FaChevronDown } from "react-icons/fa"

import styles from "./navigationItem.module.scss"

const NavigationItem = props => {
  return (
    <li className={styles.navigationItem}>
      <Link to={props.link} activeClassName={styles.active}>
        {props.label}{" "}
        {props.child && (
          <FaChevronDown
            style={{ color: "#B11F24", fontSize: 15, paddingTop: 5 }}
          />
        )}
      </Link>
      {props.children}
    </li>
  )
}

export default NavigationItem
