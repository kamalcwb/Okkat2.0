import React from 'react'
import styles from './TrendCard.module.css'

import { TrendData } from '../../Data/TrendData'

const TrendCard = () => {
    return (
        <div className={styles.trendCard}>
            <h3>Tendências para voce</h3>
            {TrendData.map((trend) => {
                return (
                    <div className={styles.trend}>
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k compatilhamentos</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard
