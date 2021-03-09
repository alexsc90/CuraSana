import React, {useState, useContext} from 'react'
import axios from 'axios'

import AuthContext from '../../context/autenticacion/AuthContext'

export default function Login() {

    const ctxAuth = useContext(AuthContext)
    const {userLogin} = ctxAuth


    const [login, setLogin] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        e.preventDefault()
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const sendLogin = () => {
       userLogin(login)
    }

    return (
        <div>
            <form onSubmit= {sendLogin}>
                
                Email:
                <input type="email" name="email" placeholder="nombre@email.com" onChange={(e)=> handleChange(e)}/>
                
                Contraseña:
                <input type="password" name="password" placeholder="******" onChange={(e)=> handleChange(e)}/>
               

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}
