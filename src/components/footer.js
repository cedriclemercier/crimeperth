import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "../images/logo-white.png"

import styles from "./footer.module.scss"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      wpMenu(slug: { eq: "wa-service-area" }) {
        menuItems {
          nodes {
            path
            label
          }
        }
      }
    }
  `)

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className="container">
          <div className="row-flex">
            <div className="col-1">
              <img
                src={Img}
                style={{ width: "80%" }}
                alt="Crime Scene Cleaning Perth Logo"
              />
              <h3>CONTACT CRIME SCENE CLEANER PERTH</h3>
              <p>
                PHONE 1300 246 429 EMAIL admin@crimescenecleanerperth.com.au
              </p>
              <p>
                The team at Crime Scene Cleaner Perth understand the importance
                of discretion and professionalism. All of our staff have been
                trained to ensure that our work is conducted in an appropriate
                manner to ensure the minimum disruption while delivering a first
                className forensic and biological cleaning service.
              </p>
            </div>
            <div className="col-1">
              <h3>CRIME SCENE CLEANER PERTH SERVICES</h3>
              <p>
                Crime Scene Cleaners Perth Western Australia Death & Suicide
                Cleaning Perth Western Australia Forensic Cleaning Perth Western
                Australia Gross Filth & Hoarders Clean Ups Perth Western
                Australia Sharps & Needles Sweeps Perth Western Australia Sewage
                & Water Restoration Perth Western Australia Meth Lab Remediation
                Perth Western Australia.
              </p>
            </div>
            <div className="col-1">
              <h3>CRIME SCENE CLEANER SERVICE AREAS</h3>
              <p>
                ALL WESTERN AUSTRALIAN REGIONS INCLUDING Perth | Rockingham |
                Mandurah | Kalgoorlie | Geraldton | Albany | Kwinana | Broome |
                Busselton | Port Hedland | Karratha | Esperance | Carnarvon |
                Collie | Northam | Donnybrook | Derby | Exmouth | Dampier |
                Kununurra | Yanchep.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0 }} />
      <div className={styles.copyright}>
        <div className="container">
          <p className="no-padding">
            © Copyright 2020 | All Rights Reserved | Melbourne Forensic Cleaning
            {" "}
            {data.wpMenu.menuItems.nodes.map(el => (
              <Link key={el.path} to={el.path}>
                | {el.label}{" "}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
