import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        // const {url, options} = USER_GET(token)
        // const response = await fetch(url, options)
        // const json = await response.json()
        // setData(json)
        // setLogin(true)
    }

    async function userLogin(email, password){
        try {
            // setError(null)
            // setLoading(true)
            console.log(email)
            // console.log(password)

            const req = TOKEN_POST({email, password})
            req.then( res=>{
                const {data} = res
                // console.log(data )
                if(data){
                    localStorage.getItem('token')
                    navigate('/conta')
console.log(data)

                    // getUser(data)
                }
            })
            // console.log(req.)
            // const res = await req
            // const token = localStorage.getItem('token')
            // console.log(res.statusText)
            // if(res.statusText !== "OK") throw new Error(`Error: ${res.statusText}`)
            // let token = res.data
            // const token = localStorage.getItem('token')
            // await getUser(token)
            // navigate('/conta')
            // console.log(res.data)
            
            
        } catch (err){
            setError(err.message)
            setLogin(false)
        } finally {
            setLoading(false)
        }
        
    }

    React.useEffect(() => {
        async function autoLogin() {
            // const token = localStorage.get('token')
            // if(token){
            //     try{
            //         setError(null)
            //         setLoading(true)
            //         const req = TOKEN_VALIDATE_POST(token)
            //         const res = await req
            //         if(res.statusText !== "OK") throw new Error('token invalido')
            //         await getUser(token)
            //     } catch (err) {
            //         userLogout()
            //     } finally {
            //         setLoading(false)
            //     }
                
            // }   else {
            //     setLogin(false);
            //   }
        }
        autoLogin()
    }, [userLogout])
    
    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}