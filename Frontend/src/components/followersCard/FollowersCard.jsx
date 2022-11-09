import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../followersCard/FollowersCard.module.css'
import User from '../user/User'

import { getAllUser } from '../../api/UserRequest'


const FollowersCard = () => {
    const [persons, setPersons] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser()
            setPersons(data)
        }
        fetchPersons()
    }, [])
    return (
        <div className={styles.followersCard}>
            <h3>Pessoas que talvez você conheça</h3>

            {persons.map((person, id) => {
                if (person._id !== user._id) {
                    return <User person={person} key={id} />
                }
            })}
        </div>
    )
}

export default FollowersCard
