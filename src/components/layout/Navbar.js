import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo(1).png'

export default function Navbar() {
    return (
        <>
            <nav class="bg-gray-800 shadow">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <div class="-ml-2 mr-2 flex items-center md:hidden">
                                <button
                                type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg
                                class="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                 stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                                <svg
                                class="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                                </button>
                            </div>
                            <div class="flex-shrink-0 flex items-center">
                                <img
                                class="block lg:hidden h-8 w-auto"
                                src={Logo}
                                alt="logo"
                                />
                                <img
                                class="hidden lg:block h-8 w-auto"
                                src={Logo}
                                alt="logo"
                                />
                            </div>
                            <div class="hidden md:ml-6 md:flex md:space-x-8">
                            <Link
                            to="/"
                            class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Inicio
                            </Link>
                            <Link
                            to="/contacto"
                            class="border-transparent text-white hover:border-gray-300 hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Contacto
                            </Link>
                            
    
                            </div>
                        </div>
                        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link 
                            to='/iniciar'
                            class="whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
                            Inicia sesión
                            </Link>
                            <Link 
                            to='/registrarse'
                            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Regístrate
                            </Link>
                            
                        </div>
                        
                    </div>
                </div>
             </nav>
        </>
    )
}
