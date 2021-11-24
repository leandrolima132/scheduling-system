import React, { Component } from "react";
import api from "../../api";

class UserStats extends Component {
  state = {
    usuarios: [],
  };

  async componentDidMount() {
    const email = localStorage.getItem("email");
    const response = await api.get(`/auth/listAgendamentosByUser/${email}`);
    this.setState({ usuarios: response.data.Agendamentos.Agendamento });
    console.log(email);
  }
  render() {
    const { usuarios } = this.state;

    return (
      <div className='container'>
        <tr>
          <th>Data</th>
          <th>Retorno</th>
          <th>Descrição</th>
          <th>Fisioterapeuta</th>
        </tr>
        {usuarios.map((item) => (
          <tr key={item._id}>
            <td>{item.Data}</td>
            <td>{item.Retorno}</td>
            <td>{item.Descricao}</td>
            <td>{item.Medico}</td>
          </tr>
        ))}
      </div>
    );
  }
}

export default UserStats;
