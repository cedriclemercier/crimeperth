import React from "react"
import siteLogo from "../../images/logo.png"
import classes from "./Logo.module.scss"

const logo = props => (
  <div className={classes.Logo}>
    <img src={siteLogo} alt={props.alt} className={classes.img} />
  </div>
)

export default logo
