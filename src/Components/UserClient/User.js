import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
    return (
        <section className='container'>
            <UserHeader/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='consult' element={<UserPhotoPost/>}/>
                <Route path='estatisticas' element={<UserStats/>}/>
            </Routes>
        </section>
    )
}

export default User
