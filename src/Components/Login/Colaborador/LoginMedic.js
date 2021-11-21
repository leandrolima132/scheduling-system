import React from 'react'
import useForm from '../../../Hooks/useForm'
import Button from '../../Forms/Button'
import Input from '../../Forms/Input'
import styles from './LoginMedic.module.css'
import { UserContext } from '../../../UserContext'
import stylesDefault from './Login.module.css'
import Error from '../../Helper/Error'


const LoginCollaborated = () => {
    const email = useForm()
    const password = useForm()

    const { medicLogin, error, loading  } = React.useContext(UserContext)
    async function handleSubmit(e) {
        e.preventDefault()

        if(email.validate() && password.validate()){
            medicLogin(email.value, password.value)
        }
    }

    return (
        <div className={stylesDefault.login}>
            <div className={stylesDefault.forms}>
            <section className='animeLetf'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label='Usuário' type='text' name='username' {...email} />
                <Input label='Senha' type='password' name='password' {...password}/>
                {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
         <Error error={error && 'Dados incorretos.'} />

            </form>
           
        </section>
            </div>
        </div>
    )
}

export default LoginCollaborated
