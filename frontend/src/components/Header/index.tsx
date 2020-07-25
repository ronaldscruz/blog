import React from "react"
import styles from "./styles.module.scss"

import { useStaticQuery, graphql, Link } from "gatsby"

import slugify from "slugify"
import Button from "../Button"

const Header: React.FC = () => {
  const categoriesData = useStaticQuery(graphql`
    {
      allStrapiCategory {
        edges {
          category: node {
            name
          }
        }
      }
    }
  `)

  const categories = categoriesData.allStrapiCategory.edges

  return (
    <nav className={styles.nav}>
      <Link to="/" className="link-reset">
        <span className="mr" role="img" aria-label="diamond with a dot">
          💠
        </span>
        Ronald S. Cruz
      </Link>
      <ul>
        {categories.map(({ category }) => (
          <li>
            <Link
              className="link-reset"
              to={`/${slugify(category.name, { lower: true })}`}
            >
              <Button>{category.name}</Button>
            </Link>
          </li>
        ))}
        <li>
          <Link className="link-reset" to="/about-me">
            <Button>About me</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
