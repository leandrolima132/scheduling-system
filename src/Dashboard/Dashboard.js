import React from 'react'
import DashHeader from './Header/DashHeader'
import { Route, Routes } from 'react-router'
import DashTable from './Header/DashBody/DashTable'

const Dashboard = () => {

    
    return (
        <section className='container'>
        <DashHeader/>
        <DashTable/>
        <Routes>
             {/* <Route path='/' element={}/> */}
            {/*<Route path='consult' element={<UserCreateConsult/>}/>
            <Route path='estatisticas' element={<UserStats/>}/> */}
        </Routes>
        </section>
    
    )
}

export default Dashboard
