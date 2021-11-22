import React from 'react'
import api from '../../api'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import TextArea from '../Forms/TextArea'

const UserPhotoPost = () => {
    const data = useForm()
    const retorno = useForm()
    const medico = useForm()
    const descricao = useForm()

    const { dados } = React.useContext(UserContext)

    
    
    async function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData()
    // formData.append('data', data.value)
    // formData.append('retorno', retorno.value)
    // formData.append('medico', medico.value)
    // formData.append('descricao', descricao.value)

     await api.post(`/auth/registerAgendamento/${dados.email}`, {
            Data:data.value,
            Retorno:retorno.value,
            Descricao:descricao.value,
            Medico:medico.value
    }).then(res=> {
        console.log(res.data)
        })

    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Input label='Data' type='text' name='data' {...data}/>
                <Input label='Retorno' type='text' name='retorno' {...retorno}/>
                <Input label='Medico' type='text' name='medico' {...medico}/>
                <TextArea label='Descricao' value='descricao' rows='5' {...descricao}/>
                <Button children='Cadastrar'/>

            </form>
        </section>
    )
}

export default UserPhotoPost
