import React from 'react'
import { useNavigate } from 'react-router'
import api from '../../../api'
import useForm from '../../../Hooks/useForm'
import { UserContext } from '../../../UserContext'
import Button from '../../Forms/Button'
import Input from '../../Forms/Input'
import styles from './Login.module.css'

const LoginCreateMedic = () => {
    const navigate = useNavigate()
    const name = useForm()
    const telefone = useForm()
    const sexo = useForm()
    const naturalidade = useForm()
    const dataNascimento = useForm()
    const crm = useForm()
    const email = useForm()
    const password = useForm()

    const { userLogin } = React.useContext(UserContext)

    async function handleSubmit(e){
        e.preventDefault()
       api.post('/auth/medic', {
        name: name.value,
        telefone: telefone.value,
        sexo: sexo.value,
        naturalidade: naturalidade.value,
        dataNascimento: dataNascimento.value,
        crm: crm.value,
        email: email.value,
        password:password.value,
       }).then(res => {
            userLogin(email.value, password.value)
         navigate('/area')
    })
     

    }

    return (
        <div className={styles.register}>
            <div className={styles.forms}>
            <section className='animeLetf'>
            <h1 className='title'>Cadastro do Colaborador</h1>
            <form onSubmit={handleSubmit}>
            <Input label='Nome' type='text' name='name' {...name}/>
            <Input label='Telefone' type='text' name='telefone' {...telefone}/>
            <Input label='Sexo' type='text' name='sexo' {...sexo}/>
            <Input label='Naturalidade' type='text' name='naturalidade' {...naturalidade}/>
            <Input label='Data de Nascimento' type='text' name='dtnascimento' {...dataNascimento}/>
            <Input label='Número do CRM' type='text' name='crm' {...crm}/>
            <Input label='Email' type='text' name='email' {...email}/>
            <Input label='Senha' type='password' name='senha' {...password}/>
             <Button children='Cadastrar'/>
          
            </form>
        </section>
            </div>
            </div>
    )
}

export default LoginCreateMedic
