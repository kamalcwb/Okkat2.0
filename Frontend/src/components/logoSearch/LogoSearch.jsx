import React from 'react'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'
import styles from '../logoSearch/LogoSearch.module.css'

const LogoSearch = () => {
    return (
        <div className={styles.logoSearch}>
            <img src={Logo} alt="logo" />
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
