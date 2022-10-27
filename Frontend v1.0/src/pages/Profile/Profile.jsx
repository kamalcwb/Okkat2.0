import React from 'react'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import PostSide from '../../components/postSide/PostSide'
import RightSide from '../../components/rightSide/RightSide'
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileLeft />
            <div className={styles.profileCenter}>
                <ProfileCard />
                <PostSide />
            </div>
            <RightSide />

        </div>
    )
}

export default Profile
