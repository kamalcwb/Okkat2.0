import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import styles from '../profileSide/ProfileSide.module.css'

const ProfileSide = () => {
    return (
        <div className={styles.profileSide}>
            <ProfileCard />
            <LogoSearch />
        </div>
    )
}

export default ProfileSide
