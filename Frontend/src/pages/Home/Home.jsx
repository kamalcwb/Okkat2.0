import React from 'react'
import styles from '../Home/Home.module.css'

import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'

const Home = () => {
    return (
        <div className={styles.home}>
            <ProfileSide className={styles.profileSide} />
            <PostSide />
            <div className={styles.rightSide}>RightSide</div>
        </div>
    )
}

export default Home
