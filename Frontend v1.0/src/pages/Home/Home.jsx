import React from 'react'
import styles from '../Home/Home.module.css'

import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'
import RightSide from '../../components/rightSide/RightSide'

const Home = () => {
    return (
        <div className={styles.home}>
            <ProfileSide className={styles.profileSide} />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home
