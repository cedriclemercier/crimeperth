import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavigationItem from "./NavigationItem"

import styles from "./navigationItems.module.scss"
import SubNavigationItems from "./SubnavigationItems"
import SubNavigationItem from "./SubnavigationItem"

const NavigationItems = props => {
  const data = useStaticQuery(graphql`
    query {
      wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            path
            childItems {
              nodes {
                path
                label
              }
            }
            label
            parentId
          }
        }
        id
      }
    }
  `)

  return (
    <ul className={styles.navigationItems}>
      {data.wpMenu.menuItems.nodes.map(main => {
        return main.parentId === null ? (
            <NavigationItem link={main.path} label={main.label} key={main.path}>
              <SubNavigationItems key={main.path + "-sub"}>
                {main.childItems.nodes.map(el => (
                  <SubNavigationItem link={el.path} key={el.path}>
                    {el.label}
                  </SubNavigationItem>
                ))}
              </SubNavigationItems>
            </NavigationItem>
        ) : null
      })}
    </ul>
  )
}

export default NavigationItems
