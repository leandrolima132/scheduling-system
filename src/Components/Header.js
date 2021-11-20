import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/fisiomedi.svg'

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
                         </Link>)  : (<div style={{display:'flex'}}>
                             <Link className={styles.user} to='/login'>Login</Link> 
                             <Link className={styles.area} to='/login'>Área do colaborador</Link>
                             <Link className={styles.conosco} to='/login'>Trabalhe consoco</Link>
                             </div> )}
            </nav>
            
        </div>
    )
}

export default Header