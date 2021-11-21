import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../Assets/fisiomedi.svg'

import { UserContext } from '../UserContext'

const Header = () => {
    const { dados } = React.useContext(UserContext)
    return (
        <div className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to='' className={styles.logo} >
                    <Logo/>
                </Link>
                {dados ? (
                    <Link className={styles.login} to='/conta'>
                        {dados.name}
                         </Link>)  : (<div style={{display:'flex'}}>
                             <Link className={styles.user} to='/login'>Login</Link> 
                             <Link className={styles.area} to='/area'>Área do colaborador</Link>
                             <Link className={styles.conosco} to='/trabalheconosco'>Trabalhe consoco</Link>
                             </div> )}
            </nav>
            
        </div>
    )
}

export default Header