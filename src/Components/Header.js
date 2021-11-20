import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/logo.svg'

import { UserContext } from '../UserContext'

const Header = () => {
    const { data } = React.useContext(UserContext)
    return (
        <div className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to='/' className={styles.logo} >
                    <Dogs/>
                </Link>
                {data ? (
                    <Link className={styles.login} to='/conta'>
                        {data.name}
                         </Link>)  : (<Link className={styles.login} to='/login'>Login</Link>)}
            </nav>
            
        </div>
    )
}

export default Header