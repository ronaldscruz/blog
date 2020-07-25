import React from "react"
import styles from "./styles.module.scss"

import Header from "../Header"
import Footer from "../Footer"

type Props = {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
