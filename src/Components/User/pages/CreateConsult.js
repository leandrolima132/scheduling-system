import React from "react";
import api from "../../../api";
import useForm from "../../../Hooks/useForm";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import Selection from "../../Forms/Selection";
import TextArea from "../../Forms/TextArea";

const CreateConsult = () => {
  const data = useForm();
  const retorno = useForm();
  const [medico, setMedico] = React.useState("");
  const descricao = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    const email = localStorage.getItem("email");
    await api
      .post(`/auth/registerAgendamento/${email}`, {
        Data: data.value,
        Retorno: retorno.value,
        Descricao: descricao.value,
        Medico: medico,
      }).then(res => {
        console.log(res)
      })
   
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input label="Data" type="text" name="data" {...data} />
        <Input label="Retorno" type="text" name="retorno" {...retorno}  />
        <Selection  value={medico} setValue={setMedico} />
        <TextArea label="Descricao" value="descricao" rows="5" {...descricao} />
        <Button children="Cadastrar" />
      </form>
    </section>
  );
};

export default CreateConsult;
