import React from 'react'
import styles from './InfoCard.module.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../profileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            } else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    }, [user])

    const handleLogout = () => {
        dispatch(logOut())
    }

    return (
        <div className={styles.infoCard}>
            <div className={styles.infoHead}>
                <h4>Informações do Perfil</h4>
                {user._id === profileUserId ? (<div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpen(true)} />
                    <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} data={user} />
                </div>
                ) : (
                    ''
                )}

            </div>
            <div className={styles.info}>
                <span>
                    <b>Status de relacionamento: </b>
                </span>
                <span>{profileUser.relationship}</span>
            </div>
            <div className={styles.info}>
                <span>
                    <b>Mora em: </b>
                </span>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className={styles.info}>
                <span>
                    <b>Trabalha em: </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>
            <button className={styles.button} onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard