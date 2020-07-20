import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

type Props = {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
