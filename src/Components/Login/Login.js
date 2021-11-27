import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import LoginForm from '../User/Login/LoginForm'
import LoginCreate from '../User/Login/LoginCreate'
import styles from './styles/Login.module.css'
import { UserContext } from '../../UserContext'
import LoginCreateMedic from '../Medic/Login/LoginCreateMedic'


const Login = () => {
    const {login} = React.useContext(UserContext)
    
    if(login === true) return <Navigate to='/conta'/>
    return (
        <section className={styles.login}>
               <div className={styles.forms}>
            <Routes>
                <Route path='/' element={<LoginForm/>}/>
                <Route path='criar' element={<LoginCreate/>}/>
                <Route path='colaborador' element={<LoginCreateMedic/>}/>

            </Routes>
        </div>
        </section>
     
    )
}

export default Login
