import React from 'react'
import Sidebar from '../layout/Sidebar'

import Imagen from '../../images/imagen5.jpg'

export default function Orders() {
    return (
        <>
            <Sidebar />

            <div class="bg-brown">
                <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                        <div class="lg:col-span-2">
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                    <img class="object-cover shadow-lg rounded-lg" src={Imagen} alt="" />
                                </div>
                                <div class="text-lg text-center leading-6 font-medium text-7xl space-y-3">
                                    <h3 class="float-right">Próximamente...</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                           
        </>
    )
}
