import { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import styles from './ProfileModal.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';

function ProfileModal({ modalOpen, setModalOpen, data }) {
    const theme = useMantineTheme();
    const { password, ...other } = data
    const [formData, setFormData] = useState(other)
    const [profileImg, setProfileImg] = useState(null)
    const [coverImg, setCoverImg] = useState(null)
    const dispatch = useDispatch()
    const param = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            event.target.name === "profileImg"
                ? setProfileImg(img)
                : setCoverImg(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = formData
        if (profileImg) {
            const data = new FormData()
            const fileName = Date.now() + profileImg.name
            data.append("name", fileName)
            data.append("file", profileImg)
            userData.profilePicture = fileName
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        if (coverImg) {
            const data = new FormData()
            const fileName = Date.now() + coverImg.name
            data.append("name", fileName)
            data.append("file", coverImg)
            userData.coverPicture = fileName
        }
        try {
            dispatch(uploadImage(data))
        } catch (error) {
            console.log(error)
        }
        dispatch(updateUser(param.id, userData))
        setModalOpen(false)
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
        >
            <form className={styles.infoForm}>
                <h3>Seu Perfil</h3>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='name'
                        placeholder='Nome'
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='lastName'
                        placeholder='Sobrenome'
                        onChange={handleChange}
                        value={formData.lastName}

                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='worksAt'
                        placeholder='Trabalha em'
                        onChange={handleChange}
                        value={formData.worksAt}

                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='livesIn'
                        placeholder='Mora em'
                        onChange={handleChange}
                        value={formData.livesIn}

                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='country'
                        placeholder='País'
                        onChange={handleChange}
                        values={formData.country}

                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='relationship'
                        placeholder='Status de relacionamento'
                        onChange={handleChange}
                        value={formData.relationship}

                    />
                </div>
                <div>
                    Foto de Perfil
                    <input
                        type='file'
                        name='profileImg'
                        onChange={onImgChange}
                    />
                </div>
                <div>
                    Foto de Capa
                    <input
                        type='file'
                        name='coverImg'
                        onChange={onImgChange}
                    />
                </div>
                <button className={styles.button} onClick={handleSubmit}>Atualizar</button>
            </form>
        </Modal >
    );
}

export default ProfileModal