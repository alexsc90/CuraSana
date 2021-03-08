import React, { useState } from 'react'
import axios from 'axios'

export default function Signup() {

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
        console.log(infoSignup)
        
    }

    const sendNewUser= async() => {
        console.log(infoSignup)
        const uploadUser= await axios.post("http://localhost:3001/signup", infoSignup)
        setInfoSignup({
            ...infoSignup,
            name:"",
            email:"",
            password:"",
            phoneNumber: 0, 
        })
    }

    return (
        <div>
            <form onSubmit= {() => sendNewUser()}>
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
