import React, { Component } from 'react'
import api from '../../../api'

class DashTable extends Component {
    state = {
        data: []
    }

    async componentDidMount(){
        const response = await api.get('/auth/usuario')
        this.setState({data: response.data.usuarios})
    }

    render(){
        const { data } = this.state
        const dados = data.map(item => item.Agendamento)
        
        return(
            <div>
        <tr>
          <th>Data</th>
          <th>Retorno</th>
          <th>Descrição</th>
          <th>Fisioterapeuta</th>
        </tr>
        
        {dados.map((item) => (
          <tr key={item._id}>
            <td>{item.Data}</td>
            <td>{item.Retorno}</td>
            <td>{item.Descricao}</td>
            <td>{item.Medico}</td>
          </tr>
        ))}
      </div>
        )
    }
  

 
        
       

  
}

export default DashTable
// let response = await fetch(`http://localhost:3000/auth/usuario`);
// response = await response.json();
// await setData(response.usuarios)
// console.log(data)
// }