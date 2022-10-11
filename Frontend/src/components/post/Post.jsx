import React from 'react'
import styles from './Post.module.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({ data }) => {
    return (
        <div className={styles.post}>
            <img src={data.img} alt="" />
            <div className={styles.postReact}>
                <img src={data.liked ? Heart : NotLike} alt='' />
                <img src={Comment} alt='' />
                <img src={Share} alt='' />
            </div>
            <span>{data.likes} likes</span>
            <div className={styles.detail}>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post
