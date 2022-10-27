import React from 'react'
import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'
import styles from '../postSide/PostSide.module.css'

const PostSide = () => {
    return (
        <div className={styles.postSide}>
            <PostShare />
            <Posts />
        </div>
    )
}

export default PostSide
