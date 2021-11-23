import React from 'react'
import HeaderDashboard from './DashHeaderNav'
import styles from './DashHeader.module.css'

const HeaderDash = () => {
   
    return (
        <header className={styles.header}>
            <h1 className='title'>Dashborad</h1>
            <HeaderDashboard/>
        </header>
    )
}

export default HeaderDash
