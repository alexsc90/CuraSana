import React from 'react'
import { useParams } from 'react-router'

import Sidebar from '../layout/Sidebar'
import UpdateProfile from './UpdateProfile'


export default function Profile() {
    const {id} = useParams()
    return (
        <>
            <Sidebar />
            <UpdateProfile id={id}/>
        </>
    )
}
