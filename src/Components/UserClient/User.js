import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import UserHeader from './UserHeader'
import UserCreateConsult from './UserCreateConsult';
import UserStats from './UserStats';

const User = () => {
    return (
        <section className='container'>
            <UserHeader/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='consult' element={<UserCreateConsult/>}/>
                <Route path='estatisticas' element={<UserStats/>}/>
            </Routes>
        </section>
    )
}

export default User
