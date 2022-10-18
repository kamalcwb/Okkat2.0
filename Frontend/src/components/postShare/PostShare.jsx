import React, { useState, useRef } from 'react'
import styles from '../postShare/PostShare.module.css'
import ImageProfile from '../../img/profileImg2.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }
    return (
        <div className={styles.postShare}>
            <img src={ImageProfile} alt='' />
            <div>
                <input type="text" placeholder='O que está acontecendo' />
                <div className={styles.postOptions}>
                    <div className={styles.option} style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}>
                        <UilScenery />
                        Foto
                    </div>
                    <div className={styles.option} style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Mídia
                    </div>{" "}
                    <div className={styles.option} style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Localização
                    </div>{" "}
                    <div className={styles.option} style={{ color: "var(--schedule)" }}>
                        <UilSchedule />
                        Programar
                    </div>
                    <button className={styles.button}>Postar</button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className={styles.previewImage}>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div >
    )
}

export default PostShare
