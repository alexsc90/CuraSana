import React, {useState} from 'react'
import axios from 'axios'

export default function Login() {
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

    const sendLogin = async () => {
        const postLogin = await axios.post('http://localhost:3001/login', login)
        setLogin({
            ...login,
            email: "",
            password: ""
        })
    }

    return (
        <div>
            <form onSubmit= {() => sendLogin()}>
                
                Email:
                <input type="email" name="email" placeholder="nombre@email.com" onChange={(e)=> handleChange(e)}/>
                
                Contraseña:
                <input type="password" name="password" placeholder="******" onChange={(e)=> handleChange(e)}/>
               

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}
