import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

type Props = {}

const IndexPage: React.FC<Props> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <span role="img" aria-label="under construction">
        🚧
      </span>{" "}
      Under construction{" "}
      <span role="img" aria-label="under construction">
        🚧
      </span>
    </h1>
  </Layout>
)

export default IndexPage
