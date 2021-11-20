import axios from 'axios'
import React from 'react'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import TextArea from '../Forms/TextArea'

const UserPhotoPost = () => {
    // const {dado, setDado} = React.useState('')
    const data = useForm()
    const retorno = useForm()
    const medico = useForm()
    const descricao = useForm()

    function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData()
    formData.append('data', data.value)
    formData.append('retorno', retorno.value)
    formData.append('medico', medico.value)
    formData.append('descricao', descricao.value)

   
    axios.post(`http://localhost:3000/registerAgendamento/`,{
        Data: data.value,
        Retorno: retorno.value,
        Medico: medico.value,
        Descricao: descricao.value
    }).then(res=> {
        this.setDado(res)
        // console.log(dado)
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
