import React from "react";
import useForm from "../../../Hooks/useForm";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import styles from "./styles/LoginMedic.module.css";
import { UserContext } from "../../../UserContext";
import stylesDefault from "./styles/Login.module.css";
import Error from "../../Helper/Error";

const LoginMedic = () => {
  const name = useForm();
  const password = useForm();

  const { medicLogin, error, loading } = React.useContext(UserContext);
  async function handleSubmit(e) {
    e.preventDefault();

    if (name.validate() && password.validate()) {
      medicLogin(name.value, password.value);
      localStorage.setItem("name", name.value);
    }
  }

  return (
    <div className={stylesDefault.login}>
      <div className={stylesDefault.forms}>
        <section className="animeLetf">
          <h1 className="title">Login</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...name} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <Error error={error && "Dados incorretos."} />
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginMedic;
