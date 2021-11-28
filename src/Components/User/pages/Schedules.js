import React from "react";
import api from "../../../api";

const Schedules = ({ itens, isLoading, idAgendamento }) => {

  async function deletar(e) {
    const id = localStorage.getItem("id");

    let confirmDelete = window.confirm(
      "Deseja realmente cancelar esse consulta?"
    );
    if (confirmDelete) {
      await api.delete(`/auth/DeleteAgendamento/${id}/${e}`);
    }
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
                  onClick={() => deletar(item._id)}
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
