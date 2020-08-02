import React from "react"

import Layout from "../../components/Layout"

import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

export const query = graphql`
  query getCurrentPost($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      content
      lead
      cover {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`

type Props = {
  data: any
}

const PostTemplate: React.FC<Props> = ({ data }) => {
  const {
    id,
    title,
    content,
    lead,
    cover: {
      childImageSharp: {
        fluid: { src: coverSrc },
      },
    },
  } = data.strapiPost

  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>{lead}</p>
        <ReactMarkdown
          source={content}
          transformImageUri={uri => `${process.env.STRAPI_URL}/${uri}`}
        ></ReactMarkdown>
      </article>
    </Layout>
  )
}

export default PostTemplate
