import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router'

import Sidebar from '../layout/Sidebar'
import OrdersList from '../orders/OrdersList'
import UpdateProfile from './UpdateProfile'
import AuthContext from '../../context/autenticacion/AuthContext'


export default function Profile() {
    const {id} = useParams()

    const ctxAuth = useContext(AuthContext)
    const {usuarioAutenticado} = ctxAuth
    
    useEffect(() => {
        usuarioAutenticado()
    }, [])

    return (
        <>
            <Sidebar />
            <UpdateProfile id={id}/>
            <OrdersList />
        </>
    )
}
