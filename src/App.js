import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import LoginMedic from './Components/Login/Colaborador/LoginMedic';
import LoginCreateMedic from './Components/Login/Colaborador/LoginCreateMedic';
import Login from './Components/Login/Login';
import User from './Components/UserClient/User';
import { UserStorage } from './UserContext'


function App() {
  return (
    <div >
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login/*' element={<Login/>} />
              <Route path='area/*' element={<LoginMedic/>}/>
              <Route path='trabalheconosco/*' element={<LoginCreateMedic/>}/>
              <Route path="conta/*" element={<User/>}/>
              <Route path="dasboard/*" element={<User/>}/>
            </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
