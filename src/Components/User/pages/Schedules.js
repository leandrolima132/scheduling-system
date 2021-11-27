import React from "react";
import api from "../../../api";

const Schedules = ({ itens, isLoading, idAgendamento }) => {
  console.log(idAgendamento.Agendamentos)
  async function deletar() {
    const id = localStorage.getItem('id')
   

    
    // let confirmDelete = window.confirm('Deseja realmente excluir sua Pesquisa?')
    // if(confirmDelete){
      // await api.delete(`/auth/DeleteAgendamento/${id}/${itens._id}`)

    // }
   }

  return isLoading ? (
    <h1>Aguarde</h1>
  ) : (
    <div>
      <tr>
        <th>Data</th>
        <th>Retorno</th>
        <th>Descrição</th>
        <th>Fisioterapeuta</th>
      </tr>
      {itens !== 0
        ? itens.map((item) => (
            <tr key={item._id}>
              <td>{item.Data}</td>
              <td>{item.Retorno}</td>
              <td>{item.Descricao}</td>
              <td>{item.Medico}</td>
              <td>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px",
                    outline: "none",
                  }}
                  onClick={deletar}
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))
        : ""}
    </div>
  );
};

export default Schedules;
// state = {
//   usuarios: [],
// };

// async componentDidMount() {
//   const email = localStorage.getItem("email");
//   const response = await api.get(`/auth/listAgendamentosByUser/${email}`);
//   this.setState({ usuarios: response.data.Agendamentos.Agendamento });

// }
// render() {
//   const { usuarios } = this.state;

//   return (
//     <div>
//       <tr>
//         <th>Data</th>
//         <th>Retorno</th>
//         <th>Descrição</th>
//         <th>Fisioterapeuta</th>
//       </tr>
//       {usuarios !== 0 ?  usuarios.map((item) => (
//         <tr key={item._id}>
//           <td>{item.Data}</td>
//           <td>{item.Retorno}</td>
//           <td>{item.Descricao}</td>
//           <td>{item.Medico}</td>
//           <td>
//             <button
//               style={{
//                 background: "red",
//                 color: "white",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 border: "1px",
//                 outline: "none",
//               }}
//             >
//               Cancelar
//             </button>
//           </td>
//         </tr>
//       )) : ''}
//     </div>
//   );
// }
