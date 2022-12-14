import { useState, React } from 'react'
import { Link } from 'react-router-dom'
import styles from './RightSide.module.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'
import ShareModal from '../shareModal/ShareModal'

const RightSide = () => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className={styles.rightSide}>
            <div className={styles.navIcons}>
                <Link to={'../home'}><img src={Home} alt='' /></Link>

                <UilSetting />
                <img src={Noti} alt='' />
                <img src={Comment} alt='' />
            </div>
            <TrendCard />
            <button className={styles.button} onClick={() => setModalOpen(true)}
            >
                Compartilhar
            </button>
            <ShareModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen} />
        </div >
    )
}

export default RightSide
