import React, { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../context/autenticacion/AuthContext'

export default function Signup() {

    // CONTEXTO
    const ctxAuth = useContext(AuthContext)
    const { registrarUsuario } = ctxAuth


    const [infoSignup, setInfoSignup] = useState({
        name:"",
        email:"",
        password:"",
        phoneNumber: 0
    })

    const handleChange= (e) =>{
        e.preventDefault()
        setInfoSignup({
            ...infoSignup,
            [e.target.name]: e.target.value
        })
        
    }

    const sendNewUser = () => {
        registrarUsuario(infoSignup)
    }

    return (
        <div>
            <form onSubmit={sendNewUser}>
                Nombre:
                <input type="text" name="name" placeholder="tu Nombre" onChange={(e)=> handleChange(e)}/>
        
                Email:
                <input type="email" name="email" placeholder="nombre@email.com" onChange={(e)=> handleChange(e)}/>
                
                Contraseña:
                <input type="password" name="password" placeholder="******" onChange={(e)=> handleChange(e)}/>

                Número telefónico:
                <input type="number" name="phoneNumber" placeholder="123456" onChange={(e)=> handleChange(e)}/>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}
