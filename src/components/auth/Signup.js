import React, { useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo(1).png'

import AuthContext from '../../context/autenticacion/AuthContext'

export default function Signup(props) {
    
    const [infoSignup, setInfoSignup] = useState({
        name:"",
        email:"",
        password:"",
        phoneNumber: 0
    })

    const ctxAuth = useContext(AuthContext)
    const {autenticado, userRegister} = ctxAuth

    useEffect(() => {
        if(autenticado) {
        props.history.push('/perfil')
        }
    }, [autenticado, props.history])

    const {name, email, password, phoneNumber} = infoSignup

    const handleChange = (e) => {
        setInfoSignup({
            ...infoSignup,
            [e.target.name]: e.target.value
        })
        
    }

     const onSubmit = (e) => {
        e.preventDefault()

        userRegister({
            name,
            email, 
            password,
            phoneNumber
        })

     }
    

   
    return (
        <div class="min-h-screen flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                
                <img class="mx-auto h-12 w-auto" src={Logo} alt="logo" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Registrarse ahora
                </h2>                    
            </div>
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"></div>
                    <form onSubmit={onSubmit} class="mt-8 space-y-6">
                    
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <div class="mt-1">
                                <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                autocomplete="name" 
                                required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                onChange={handleChange}    
                                />
                            </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <div class="mt-1">
                        <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        autocomplete="email" 
                        required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={handleChange}    
                        />
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                        <div class="mt-1">
                        <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        autocomplete="email" 
                        required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleChange}    
                        />
                        </div>
                    </div>
                    <div>
                        <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Número telefónico</label>
                        <div class="mt-1">
                        <input 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        type="number" 
                        autocomplete="phoneNumber" 
                        required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={handleChange}    
                        />
                        </div>
                    </div>
                    

                    <div>
                        <button 
                        type="submit" 
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Crear cuenta
                        </button>

                    </div>
                    </form>
            
                </div>
            </div>
    )
}
