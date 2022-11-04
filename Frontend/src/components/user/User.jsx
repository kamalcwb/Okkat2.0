import React from 'react'
import styles from './User.module.css'

const User = ({ person }) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const handleFollow = () => {

    }

    return (
        <div className={styles.follower}>
            <div>
                <img src={person.coverPicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.jpg"} alt="" className={styles.followerImage} />
                <div className={styles.name}>
                    <span>{person.name}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={styles.fcbutton} onClick={handleFollow}>
                Follow
            </button>
        </div>
    )
}

export default User
