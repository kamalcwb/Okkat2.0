import React from 'react'
import styles from './Posts.module.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../post/Post'

const Posts = () => {
    return (
        <div className={styles.posts}>
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}

export default Posts
