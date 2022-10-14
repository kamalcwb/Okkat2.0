import React from 'react'
import styles from './InfoCard.module.css'
import { UilPen } from '@iconscout/react-unicons'

const InfoCard = () => {
    return (
        <div className={styles.infoCard}>
            <div className={styles.infoHead}>
                <h4>Seu perfil</h4>
                <div>                <UilPen width='2rem' height='1.2rem' /></div>
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
                <span>Locomotiva Brinquedos</span>
            </div>
            <button className={styles.button}>Logout</button>
        </div>
    )
}

export default InfoCard