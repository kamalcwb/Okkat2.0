import React from 'react'
import PostShare from '../postShare/PostShare'
import styles from '../postSide/PostSide.module.css'

const PostSide = () => {
    return (
        <div className={styles.postSide}>
            <PostShare />
        </div>
    )
}

export default PostSide
