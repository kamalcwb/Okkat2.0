import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import styles from '../profileSide/ProfileSide.module.css'

const ProfileSide = () => {
    return (
        <div className={styles.profileSide}>
            <LogoSearch />
        </div>
    )
}

export default ProfileSide
