import React, { useState, useRef } from 'react'
import styles from '../postShare/PostShare.module.css'
import ImageProfile from '../../img/profileImg2.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'


const PostShare = () => {
    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const dispatch = useDispatch()
    const desc = useRef()
    const { user } = useSelector((state) => state.authReducer.authData)

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage(img)
        }
    }
    const reset = () => {
        setImage(null)
        desc.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename
            console.log(newPost)
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
    return (
        <div className={styles.postShare}>
            <img src={ImageProfile} alt='' />
            <div>
                <input
                    ref={desc}
                    required
                    type="text" placeholder='O que está acontecendo' />
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
                    <button className={styles.button}
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Carregando..." : "Postar"}
                    </button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className={styles.previewImage}>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div >
    )
}

export default PostShare
