import React from 'react'
import styles from './InfoCard.module.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../profileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className={styles.infoCard}>
            <div className={styles.infoHead}>
                <h4>Seu perfil</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpen(true)} />
                    <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                </div>
            </div>
            <div className={styles.info}>
                <span>
                    <b>Status de relacionamento: </b>
                </span>
                <span>Casada</span>
            </div>
            <div className={styles.info}>
                <span>
                    <b>Mora em: </b>
                </span>
                <span>Franca - São Paulo</span>
            </div>
            <div className={styles.info}>
                <span>
                    <b>Trabalha em: </b>
                </span>
                <span>Modelo</span>
            </div>
            <button className={styles.button}>Logout</button>
        </div>
    )
}

export default InfoCard