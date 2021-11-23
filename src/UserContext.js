import React from 'react'
import api  from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [dados, setDados] = React.useState(null)
    const [login, setLogin] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()


    const userLogout = React.useCallback (
        async function userLogout(){
            setDados(null)
            setError(null)
            setLoading(false)
            setLogin(false)
            window.localStorage.removeItem('token')
            navigate('/login')
        },
        [navigate],
    )
    
    async function getUser(dados){
         setDados(dados)
        console.log(dados)
         setLogin(true)
    }

    async function userLogin(email, password){
        try{
            setError(null)
            setLoading(true)
             await api.post('/auth/authenticate', {
                email,
                password
            }).then(response => {
                getUser(response.data.user)
            })
        } catch (err) {
            setError(err.message);
            setLogin(false);
        }finally {
            setLoading(false);
          }
    }

    async function medicLogin(email, password){
        try{
            setError(null)
            setLoading(true)
             await api.post('/auth/authenticateMedic', {
                email,
                password
            }).then(response => {
                getUser(response.data.user)
                navigate('/dasboard')
            })
        } catch (err) {
            setError(err.message);
            setLogin(false);
        }finally {
            setLoading(false);
          }
    }
  
    return (
        <UserContext.Provider value={{ medicLogin, userLogin, userLogout, dados, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}