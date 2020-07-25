import React from "react"
import styles from "./styles.module.scss"

type Props = {}

const Button: React.FC<Props> = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}

export default Button
