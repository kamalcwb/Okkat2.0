import React from 'react'
import styles from '../profileCard/ProfileCard.module.css'
import coverImg from '../../img/cover.jpg'
import profileImg from '../../img/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileImages}>
                <img src={coverImg} alt='' />
                <img src={profileImg} alt='' />
            </div>

            <div className={styles.profileName}>
                <span>Amanda Hashirama</span>
                <span>Franca, SP</span>
            </div>

            <div className={styles.followStatus}>
                <hr />
                <div>
                    <div className={styles.follow}>
                        <span>138</span>
                        <span>Seguindo</span>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={styles.follow}>
                        <span>6,456</span>
                        <span>Seguidores</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>Meu Perfil</span>
        </div>
    )
}

export default ProfileCard
