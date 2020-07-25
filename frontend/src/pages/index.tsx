import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

type Props = {}

const IndexPage: React.FC<Props> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
