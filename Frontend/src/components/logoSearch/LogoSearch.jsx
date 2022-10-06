import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import styles from '../logoSearch/LogoSearch.module.css'

const LogoSearch = () => {
    return (
        <div className={styles.logoSearch}>
            <span className={styles.logo}>okkat</span>
            <div className={styles.search}>
                <input type="text" placeholder="#Explorar" />
                <div className={styles.searchIcon}>
                    <UilSearch />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch
