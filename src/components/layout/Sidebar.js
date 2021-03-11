import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo(1).png'

import AuthContext from '../../context/autenticacion/AuthContext'

export default function Sidebar() {

    const ctxAuth = useContext(AuthContext)
    const {usuario, usuarioAutenticado, cerrarSesion} = ctxAuth
    
    

    useEffect(() => {
        usuarioAutenticado()
    }, [])

    return (
        <>
            
        <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-gray-800 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4 space-y-5">
                <img class="h-8 w-auto" src={Logo} alt="CuraSana" />
                <p class="ml-8 border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    
                        Hola, {usuario.name}
                </p>
                <Link to='/'
                    class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => {
                        cerrarSesion()
                    }}
                >    
                    Cerrar sesión
                </Link>
            </div>
            <div class="mt-5 flex-grow flex flex-col">
                <nav class="flex-1 bg-white space-y-1" aria-label="Sidebar">
                    <Link to="/">
                    <p class="bg-indigo-50 border-indigo-600 text-indigo-600 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
                    
                    <svg class="text-indigo-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    
                        Inicio
                    </p>
                    </Link>
                    <Link to = {`/perfil/${usuario._id}`}>
                    <p class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">                   
                    <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                        Mi perfil
                    </p>
                    </Link>
                    <Link to = "/pedido">

                    <p class="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4">
                    <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                        Crear pedido
                    </p>
                    </Link>
                    
                </nav>
            </div>
        </div>

        </>
    )
}
