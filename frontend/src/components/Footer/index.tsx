import React from "react"
import styles from "./styles.module.scss"

import { AiFillGithub } from "react-icons/ai"

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <a
          className="link-reset"
          href="https://github.com/ronaldscruz"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={22} />
        </a>
        <span>Conditions could hardly be more ideal!</span>
      </footer>
    </div>
  )
}

export default Footer
