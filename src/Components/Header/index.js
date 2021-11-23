import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { ReactComponent as Dogs } from '../../Assets/fisiomedi.svg'

import { UserContext } from '../../UserContext'

const Header = () => {
    const { dados } = React.useContext(UserContext)
    return (
        <div className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to='#' className={styles.logo} >
                    <Dogs/>
                </Link>
                {dados ? (
                    <Link className={styles.login} to='#'>
                        {dados.name}
                         </Link>)  : (<div style={{display:'flex'}}>
                             <Link className={styles.link} to='/login'>Login</Link> 
                             <Link className={styles.link} to='/area'>Área do colaborador</Link>
                             <Link className={styles.link} to='/trabalheconosco'>Trabalhe consoco</Link>
                             </div> )}
            </nav>
            
        </div>
    )
}

export default Header