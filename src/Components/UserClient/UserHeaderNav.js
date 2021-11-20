import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import { ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg'
import { ReactComponent as Adicionar} from '../../Assets/adicionar.svg'
import { ReactComponent as Sair} from '../../Assets/sair.svg'
import useMedia from '../../Hooks/useMedia'



const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext)
    const mobile = useMedia('(max-width:40rem)')
    const [mobileMenu, setMobileMenu] = React.useState(false)


    return (
        <>
           {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
       
        <nav className={styles.nav}>
            <NavLink to='/conta' end ><MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
            <NavLink to='/conta/estatisticas'><Estatisticas/>{mobile && 'Estatisticas'}</NavLink>
            <NavLink to='/conta/consult'><Adicionar/>{mobile && 'Adicionar'}</NavLink>
            <button onClick={userLogout}><Sair/>{mobile && 'Sair'}</button>
        </nav>
        </>
    )
}

export default UserHeaderNav
