import React from 'react'
import api from '../../api'
// import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Selection from '../Forms/Selection'
// import Selection from '../Forms/Selection'
import TextArea from '../Forms/TextArea'



const UserPhotoPost = () => {
    const data = useForm()
    const retorno = useForm()
    const [medico, setMedico] = React.useState('')
    const descricao = useForm()
    // const [loading, setLoading] = React.useState(false)
    const { dados } = React.useContext(UserContext)

  
    async function handleSubmit(event) {
    event.preventDefault();

        console.log(medico)

     await api.post(`/auth/registerAgendamento/${dados.email}`, {
            Data:data.value,
            Retorno:retorno.value,
            Descricao:descricao.value,
            Medico:medico
    }).then(res=> {
        console.log(res.data)
        })

    }
   
    // if(loading) return <p>Carregando...</p>
    // if(nameMedico) 
        return (
            <section>
                <form onSubmit={handleSubmit}>
                    <Input label='Data' type='text' name='data' {...data}/>
                    <Input label='Retorno' type='text' name='retorno' {...retorno}/>
                    <Selection value={medico} setValue={setMedico}/>
                    <TextArea label='Descricao' value='descricao' rows='5' {...descricao}/>
                    <Button children='Cadastrar'/>
            

                </form>
            </section>
        ) 
    // else return null;
}

export default UserPhotoPost
