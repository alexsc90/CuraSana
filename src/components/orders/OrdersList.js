import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'

import AuthContext from '../../context/autenticacion/AuthContext'
import PRODUCT_SERVICE from '../../services/products'
import { useHistory } from 'react-router'

export default function OrdersList() {

    const history = useHistory()
    const [orders, setOrders] = useState([])

    const ctxAuth = useContext(AuthContext)
    const {usuarioAutenticado} = ctxAuth
    
    useEffect(() => {
        usuarioAutenticado()
    }, [])

    useEffect(() => {
        const getOrders = async () => {
            const info = await axios.get("https://curasana.herokuapp.com/api/pedidos")

            setOrders(info.data)
        }
        getOrders()
    }, [])

    const deleteOne = async (id) => {
        const response = await PRODUCT_SERVICE.DELETE_ORDERS(id)

        history.push('/')
    }

    return (
        <>
            <div class="bg-gray-900 px-4 py-5 border-b border-gray-200 sm:px-6 text-center">
                
                <h3 class="text-lg leading-6 font-medium text-white">
                    Pedidos realizados 
                </h3>
            </div>
            {orders ?
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Fecha
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Productos
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Eliminar</span>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    orders.map((e, id) => {
                                        return(
                                            <>
                                            <tr key={id} class="bg-gray-50">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {e.createdAt}
                                                </td>
                                            
                                                <td key={id} class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {e.products.map((e, id) => {
                                                        return(
                                                            <>
                                                                <p key ={id}>- {e.name} de {e.flavour}</p>
                                                            </>
                                                        )
                                                    })
                                                    }
                                                </td>
                                                    
                                                
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    ${e.total}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => deleteOne(e._id)}
                                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Eliminar</button>
                                                </td>
                                            </tr>
                                            </>
                                        )

                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
                :
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    No haz realizado ningún pedido.
                </h3>
            }
        </>
    )
}
