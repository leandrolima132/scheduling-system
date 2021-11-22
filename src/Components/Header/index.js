import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import { ReactComponent as Dogs } from '../../Assets/fisiomedi.svg'

import { UserContext } from '../../UserContext'

const Header = () => {
    const { data } = React.useContext(UserContext)
    return (
        <div className="header">
            <nav className="`nav container">
                <Link to='/' className="logo" >
                    <Dogs/>
                </Link>
                {data ? (
                    <Link className="login" to='/conta'>
                        {data.name}
                         </Link>)  : (<div style={{display:'flex'}}>
                             <Link className="link" to='/login'>Login</Link> 
                             <Link className="link" to='/area'>Área do colaborador</Link>
                             <Link className="link" to='/trabalheconosco'>Trabalhe consoco</Link>
                             </div> )}
            </nav>
            
        </div>
    )
}

export default Header