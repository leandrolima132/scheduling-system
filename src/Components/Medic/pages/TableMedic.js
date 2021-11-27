import React from "react";

const TableMedic = ({ itens, isLoading }) => {
  const name = localStorage.getItem('name')
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
      {itens.map((item, i) =>
        itens[i].Agendamento.filter(i => i.Medico === name).map((i, t) => {
          return (
            <tr key={i._id}>
              <td>{i.Data}</td>
              <td>{i.Retorno}</td>
              <td>{i.Descricao}</td>
              <td>{i.Medico}</td>
            </tr>
          );
        })
      )}
    </div>
  );
};

export default TableMedic;

// {itens.map((item, i) => console.log(itens[i].Agendamento.map((i, t) => console.log(i))))}
// state = {
//   data: [],
// };

// async componentDidMount() {
//   const response = await api.get("/auth/usuario");
//   this.setState({ data: response.data.usuarios });
// }

// render() {
//   const { data } = this.state;
//   const dados = data.map((item) => item.Agendamento);
//   const name = localStorage.getItem("name");
//   // console.log(name);
//   return (
//     <div>
//       <tr>
//         <th>Data</th>
//         <th>Retorno</th>
//         <th>Descrição</th>
//         <th>Fisioterapeuta</th>
//       </tr>

//       {dados
//         .filter((item, i) => item[i].Medico !== name)
//         .map((item, i) => {
//           return (
//             <tr key={item[i]._id}>
//               <td>{item[i].Data}</td>
//               <td>{item[i].Retorno}</td>
//               <td>{item[i].Descricao}</td>
//               <td>{item[i].Medico}</td>
//             </tr>
//           );
//         })}
//     </div>
//   );
// }

// return (
//   <tr key={item[i]._id}>
//     <td>{item[i].Data}</td>
//     <td>{item[i].Retorno}</td>
//     <td>{item[i].Descricao}</td>
//     <td>{item[i].Medico}</td>
//   </tr>
// );
