import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import styles from '../profileSide/ProfileSide.module.css'

const ProfileSide = () => {
    return (
        <div className={styles.profileSide}>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide
