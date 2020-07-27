import React from "react"
import styles from "./styles.module.scss"

import moment from "moment"
import calculateReadingTime from "../../utils/calculateReadingTime"

type Props = {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const dateFromNow = moment(post.created_at).fromNow()
  const readingTime = calculateReadingTime(post.content)

  return (
    <article id={`post-card-${post.id}`} className={styles.postCard}>
      <img src={post.cover.childImageSharp.fluid.src} />
      <h1>{post.title}</h1>
      <small>{post.lead}</small>
      <div id="date-lecture-time">
        <span>{dateFromNow}</span>
        {" • "}
        <span>{readingTime} min read</span>
      </div>
    </article>
  )
}

export default PostCard
