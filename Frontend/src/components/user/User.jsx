import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../actions/userAction'
import styles from './User.module.css'

const User = ({ person }) => {
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(person.followers.includes(user._id))

    const handleFollow = () => {
        following ?
            dispatch(
                unfollowUser(person._id, user)
            ) : dispatch(followUser(person._id, user))
        setFollowing((prev) => !prev)
    }

    return (
        <div className={styles.follower}>
            <div>
                <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.jpg"} alt="" className={styles.followerImage} />
                <div className={styles.name}>
                    <span>{person.name}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={styles.fcbutton} onClick={handleFollow}>
                {following ? "Não seguir" : "Seguir"}
            </button>
        </div>
    )
}

export default User
