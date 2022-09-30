import React from 'react'
import styles from '../Home/Home.module.css'

import ProfileSide from '../../components/profileSide/ProfileSide'

const Home = () => {
    return (
        <div className={styles.home}>
            <ProfileSide className={styles.profileSide} />
            <div className={styles.postSide}>Posts</div>
            <div className={styles.rightSide}>RightSide</div>
        </div>
    )
}

export default Home
