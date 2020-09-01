import React from "react"
import { Link } from "gatsby"

import styles from "./BlogItem.module.scss"

const BlogItem = props => {
  const date = new Date(props.date)
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth() + 1

  const tags = props.tags.nodes

  return (
    <div className={styles.blogItem}>
      <div className={styles.date}>
        <Link to={"/" + props.slug}>
          <p>
            {day}/{month}
          </p>
          <p>{year}</p>
        </Link>
      </div>
      <div className={styles.content}>
        <Link to={"/" + props.slug}>
          <h3>{props.title}</h3>
        </Link>
        <p>{props.excerpt}</p>
        <p>
          By: <span className="text-primary">{props.author.node.name}</span>
        </p>
        <p>
          Tags:{" "}
          {tags.map((el, index) => (
            <span className={styles.tags} key={el.id} >
              {el.name + (tags[index + 1] ? ", " : "")}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default BlogItem
