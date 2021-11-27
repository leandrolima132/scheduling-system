import React from "react";
import useForm from "../../../Hooks/useForm";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import api from "../../../api";
import { UserContext } from "../../../UserContext";

const LoginCreate = () => {
  const name = useForm();
  const email = useForm();
  const cpf = useForm();
  const telefone = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    api
      .post("/auth/usuario", {
        name: name.value,
        email: email.value,
        cpf: cpf.value,
        telefone: telefone.value,
        password: password.value,
      })
      .then((res) => {
        userLogin(email.value, password.value);
      });
  }

  return (
    <section className="animeLetf">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="name" {...name} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="CPF" type="text" name="cpf" {...cpf} />
        <Input label="Telefone" type="text" name="telefone" {...telefone} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button children="Cadastrar" />
      </form>
    </section>
  );
};

export default LoginCreate;
