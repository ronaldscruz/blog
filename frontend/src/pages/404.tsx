import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

type Props = {}

const NotFound: React.FC<Props> = () => (
  <Layout>
    <SEO title="Not found" />
    <h1>This page doesn't exist :(</h1>
  </Layout>
)

export default NotFound
