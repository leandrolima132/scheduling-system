import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'


const LoginForm = () => {
    const email = useForm()
    const password = useForm()

    const { userLogin, error, loading } = React.useContext(UserContext)
    async function handleSubmit(e) {
        e.preventDefault()

        if(email.validate() && password.validate()){
            userLogin(email.value, password.value)
        }
    }

    return (
        <section className='animeLetf'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input 
                label='Usuário' 
                type='text' 
                name='email' 
                {...email}
                />
                <Input 
                label='Senha' 
                type='password' 
                name='password' 
                {...password}
                />
                  {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
         <Error error={error && 'Dados incorretos.'} />
            </form>
            <div>

                    <div className={styles.cadastro}>
                        <h2 className={styles.subtitle}>Cadastre-se</h2>
                        <p>Ainda não possui conta? Cadastre-se no site</p>
                        <Link className={stylesBtn.button} to='/login/criar'>cadastre -se</Link>
                    </div>
            </div>
        </section>
    )
}

export default LoginForm