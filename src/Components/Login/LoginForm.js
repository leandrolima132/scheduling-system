import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import { useNavigate } from 'react-router-dom'
// import api from '../../api'
import { UserContext } from '../../UserContext'


const LoginForm = () => {
    // const navigate = useNavigate(); 
    const email = useForm()
    const password = useForm()

    const { userLogin } = React.useContext(UserContext)
    async function handleSubmit(e) {
        e.preventDefault()

        if(email.validate() && password.validate()){
            userLogin(email.value, password.value)

        //     api.post('/auth/authenticate', {
        //         email: name.value,
        //         password: password.value
        //     }).then(res => {
        //         const data = res.data
        //         console.log(data )
                   

        //         if(data){
        //             localStorage.setItem('token', data)

        //             navigate('/conta')
                    
        //         }
        //     })
           
        }
    }

    return (
        <section className='animeLetf'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input 
                label='Usuário' 
                type='text' 
                name='username' 
                {...email}
                />
                <Input 
                label='Senha' 
                type='password' 
                name='password' 
                {...password}
                />
                    <Button children='Entrar'/>
            </form>
            <div>
                <Link className={styles.colaborador} to='/login/colaborador'>Área do colaborador</Link>
                <Link className={styles.colaborador} to='/login/colaborador'>Trabalhe conosco</Link>

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