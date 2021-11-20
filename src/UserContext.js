import React, {useState} from 'react'
import api, { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import useForm from './Hooks/useForm';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null)
    const [login, setLogin] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()


    const userLogout = React.useCallback (async function userLogout(){
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(false)
        window.localStorage.removeItem('token')
        navigate('/login')
    },[navigate])

    
    async function getUser(token){
       const user = await api.get('/auth/usuario', token)
        const json = await user.json()
        setData(json)
        setLogin(true)
    }

    async function userLogin(email, password){

        try{
            setError(null)
            setLoading(true)
            const response = await api.post('/auth/authenticate', {
                email,
                password
            }).then(res => {
                navigate('/conta')
            })
            await localStorage.setItem('token', response.data.token)
            const token = response.data
            console.log(token)
            await getUser(token)

            
        } catch (err) {

        }
        
    }

    React.useEffect(() => {
        async function autoLogin() {
                const token = window.localStorage.getItem('token')
            if(token){
                try {
                    setError(null)
                    setLoading(true)
                    const response = await api.post('/auth/authenticate', token)
                    console.log(response)

                    if(response.statusText !== "OK") throw new Error('Token invalido')
                    await getUser(token)
                } catch(err){
                    userLogout()
                } finally {
                    setLoading(false)
                }
                } else {
                setLogin(false);
              }
        }
        autoLogin()
    }, [userLogout])
    
    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}