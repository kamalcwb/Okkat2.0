import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../profileCard/ProfileCard.module.css'

const ProfileCard = ({ location }) => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const posts = useSelector((state) => state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={styles.profileCard}>
            <div className={styles.profileImages}>
                <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt='' />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.jpg"} alt='' />
            </div>

            <div className={styles.profileName}>
                <span>{user.name} {user.lastName}</span>
                <span>{user.worksAt ? user.worksAt : ""}</span>
                <span>{user.livesIn}</span>
            </div>

            <div className={styles.followStatus}>
                <hr />
                <div>
                    <div className={styles.follow}>
                        <span>{user.following.length}</span>
                        <span>Seguindo</span>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={styles.follow}>
                        <span>{user.followers.length}</span>
                        <span>Seguidores</span>
                    </div>
                    {location === 'profilePage' && (
                        <>
                            <div className={styles.vl}></div>
                            <div className={styles.follow}>
                                <span>{
                                    posts.filter((post) => post.userId === user._id).length
                                }</span>
                                <span>Posts</span>
                            </div>{" "}
                        </>
                    )}
                </div>
                <hr />
            </div>
            {location === 'profilePage' ? (
                ''
            ) : (
                <span>
                    <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        Meu Perfil
                    </Link>
                </span>
            )}
        </div >
    )
}

export default ProfileCard
