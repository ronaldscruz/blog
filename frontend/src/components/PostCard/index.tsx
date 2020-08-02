import React from "react"
import styles from "./styles.module.scss"

import moment from "moment"
import slugify from "slugify"
import calculateReadingTime from "../../utils/calculateReadingTime"

import { navigate } from "gatsby"

type Props = {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const dateFromNow = moment(post.created_at).fromNow()
  const readingTime = calculateReadingTime(post.content)

  const postUrl = `/post/${slugify(post.title, { lower: true })}`

  return (
    <article id={`post-card-${post.id}`} className={styles.postCard}>
      <img
        src={post.cover.childImageSharp.fluid.src}
        onClick={() => navigate(postUrl)}
      />
      <h1 onClick={() => navigate(postUrl)}>{post.title}</h1>
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
