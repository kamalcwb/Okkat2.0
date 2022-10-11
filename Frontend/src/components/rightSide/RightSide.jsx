import React from 'react'
import styles from './RightSide.module.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'

const RightSide = () => {
    return (
        <div className={styles.rightSide}>
            <div className={styles.navIcons}>
                <img src={Home} alt='' />
                <UilSetting />
                <img src={Noti} alt='' />
                <img src={Comment} alt='' />
            </div>
            <TrendCard />
            <button className={styles.button}>Compartilhar</button>

        </div>
    )
}

export default RightSide
