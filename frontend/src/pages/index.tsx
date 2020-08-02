import React from "react"
import styles from "./index.module.scss"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "../components/PostCard"

type Props = {}

const IndexPage: React.FC<Props> = () => {
  const { allStrapiPost } = useStaticQuery(graphql`
    {
      allStrapiPost {
        edges {
          post: node {
            id
            cover {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            title
            content
            lead
            created_at
          }
        }
      }
    }
  `)

  const posts = allStrapiPost.edges

  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.sectionWrapper}>
        <h1>Most read</h1>
        {posts.map(({ post }) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      <section className={styles.sectionWrapper}>
        <h1>Recent</h1>
        {posts.map(({ post }) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
