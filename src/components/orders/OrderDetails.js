import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../../context/autenticacion/AuthContext'
import CartContext from '../../context/cart/CartContext'

import Imagen from '../../images/imagen5.jpg'
import PRODUCT_SERVICE from '../../services/products'

export default function OrderDetails() {

    const history = useHistory()

    const ctxAuth = useContext(AuthContext)
    const {usuarioAutenticado, usuario} = ctxAuth

    useEffect(() => {
        usuarioAutenticado()
    }, [])

    const context = useContext(CartContext)
    const {products, limpiarCarro} = context
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const sum = products.reduce((a, b) => {
            return a + b.price
        }, 0)
        setTotal(sum)
    }, [])

    const submitOrder = async (e) => {
        e.preventDefault()
        const data = {
            products, 
            total, 
            usuario
        }

        limpiarCarro()
        setTotal(0)
        history.push('/')
        await PRODUCT_SERVICE.CREATE_ORDER(data)
    }

    return (
        <>
        <div class="mt-8 relative bg-gray-800">
            <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img class="w-full h-full object-cover" src={Imagen} alt="" />
            </div>
            <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 content-center">
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <div class="relative inline-block text-left">
                        <div>
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
                                Productos
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div class="origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div class="py-1" role="none">
                            {
                                products.map((e, id) => {
                                    return(
                                        <>
                                        <p key={id} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">- {e.name} de {e.flavour}: ${e.price}</p>
                                        </>
                                    )
                                })
                            }
                            </div>
            
                        </div>
                    </div>
                    <p class="mt-3 text-lg text-gray-300">Total: ${total}</p>
                    <div class="mt-8">
                        <div class="inline-flex rounded-md shadow">
                            <button 
                            onClick={(ev) => submitOrder(ev)}
                            type="button"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                                Hacer pedido
                            <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            </button>
                            <Link to='/'>
                            <button 
                            type="button"
                            class="ml-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                                Añadir productos
                            <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
