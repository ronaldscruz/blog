import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "antd"

type Props = {}

const IndexPage: React.FC<Props> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button type="primary">Click me</Button>
  </Layout>
)

export default IndexPage
