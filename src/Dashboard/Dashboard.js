import React from 'react'
import DashHeader from './Header/DashHeader'
import { Route, Routes } from 'react-router'

const Dashboard = () => {
    return (
        <section className='container'>
        <DashHeader/>
        <Routes>
            {/* <Route path='/' element={<Home/>}/>
            <Route path='consult' element={<UserCreateConsult/>}/>
            <Route path='estatisticas' element={<UserStats/>}/> */}
        </Routes>
        </section>
    
    )
}

export default Dashboard
