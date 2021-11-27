import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LoginMedic from "./Components/Medic/Login/LoginMedic";
import LoginCreateMedic from "./Components/Medic/Login/LoginCreateMedic";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./UserContext";
import Medic from "./Components/Medic/Medic";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="area/*" element={<LoginMedic />} />
            <Route path="trabalheconosco/*" element={<LoginCreateMedic />} />
            <Route path="conta/*" element={<User />} />
            <Route path="dasboard/*" element={<Medic />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
