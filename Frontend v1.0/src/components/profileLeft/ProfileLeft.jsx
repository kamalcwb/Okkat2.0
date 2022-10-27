import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import InfoCard from '../infoCard/InfoCard'
import LogoSearch from '../logoSearch/LogoSearch'
import styles from './ProfileLeft.module.css'

const ProfileLeft = () => {
    return (
        <div className={styles.profileLeft}>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />

        </div>
    )
}

export default ProfileLeft
