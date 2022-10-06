import React from 'react'
import styles from '../postShare/PostShare.module.css'
import ImageProfile from '../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocarionPoint } from '@iconscout/react-unicons'
import { UilShedule } from '@iconscout/react-unicons'

const PostShare = () => {
    return (
        <div className={styles.postShare}>
            <img src={ImageProfile} alt='' />
            <div>
                <input type="text" placeholder='O que está acontecendo' />
            </div>
            <div className={styles.postOptions}>
                <div className={styles.option}>
                    <UilScenery />
                </div>
            </div>
        </div>
    )
}

export default PostShare
