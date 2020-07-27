import React from "react"

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
      <section>
        <h1>Most read</h1>
        {posts.map(({ post }) => (
          <PostCard post={post} />
        ))}
      </section>
      <section>
        <h1>Recent</h1>
        {posts.map(({ post }) => (
          <PostCard post={post} />
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
