import React from 'react'
import { MEDIC_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'

const LoginCreateMedic = () => {
    const name = useForm()
    const telefone = useForm()
    const sexo = useForm()
    const naturalidade = useForm()
    const dataNascimento = useForm()
    const crm = useForm()
    const email = useForm()
    const password = useForm()

    const { userLogin } = React.useContext(UserContext)
    const { loagind, error, request } = useFetch()

    async function handleSubmit(e){
        e.preventDefault()
        const {url, options} = MEDIC_POST({
            name: name.value,
            telefone: telefone.value,
            sexo: sexo.value,
            naturalidade: naturalidade.value,
            dataNascimento: dataNascimento.value,
            crm: crm.value,
            email: email.value,
            password:password.value,
        })
        const { response } = await request(url, options)
        if(response.ok) userLogin(crm.value, password.value)
        console.log(response)

    }

    return (
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
            {loagind ? (<Button children='Cadastrando...'/>) : <Button children='Cadastrar'/>}
            <Error error={error}/>
            </form>
        </section>
    )
}

export default LoginCreateMedic
