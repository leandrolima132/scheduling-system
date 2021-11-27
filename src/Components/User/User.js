import React from "react";
import { Routes, Route } from "react-router-dom";
import api from "../../api";

import Home from "../Home";
import UserHeader from "./Header/UserHeader";
import CreateConsult from "./pages/CreateConsult";
import Schedules from "./pages/Schedules";

const User = () => {
const [itens, setItens] = React.useState([]) 
const [idAgendamento, setIdAgendamento] = React.useState([]) 
const [isLoading, setLoading] = React.useState(true) 

  React.useEffect(() => {
    const fetch = async () => {
      const email = localStorage.getItem('email')
      const response = await api.get(`/auth/listAgendamentosByUser/${email}`)
      setItens(response.data.Agendamentos.Agendamento)
      setLoading(false)
      
      setIdAgendamento(itens.map((i,t)=> i._id))
      // console.log(idAgendamento)

    }
    fetch()
  }, [])

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consult" element={<CreateConsult />} />
        <Route path="agendadas" element={<Schedules itens={itens} isLoading={isLoading} idAgendamento={idAgendamento}/>} />
      </Routes>
    </section>
  );
};

export default User;
