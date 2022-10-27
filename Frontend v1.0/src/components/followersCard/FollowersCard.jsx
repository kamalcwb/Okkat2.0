import React from 'react'
import styles from '../followersCard/FollowersCard.module.css'

import { followers } from '../../Data/FollowersData'

const FollowersCard = () => {
    return (
        <div className={styles.followersCard}>
            <h3>Quem segue você</h3>

            {followers.map((follower, id) => {
                return (
                    <div className={styles.follower}>
                        <div>
                            <img src={follower.img} alt="" className={styles.followerImage} />
                            <div className={styles.name}>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className={styles.fcbutton}>
                            Follow
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard
