import React from 'react'
import Navbar from '../layout/Navbar'
import Imagen from '../../images/imagen1.png'

export default function Contacto() {
    return (
        <>
          <Navbar />
        
          <div class="bg-white">
          
            <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8"></div>
                    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                         Contáctanos
                        </h2>
                        <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                            <div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Culiacán
                                </h3>
                                <dl class="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt class="sr-only">
                                            Contacto
                                        </dt>
                                        <dd>
                                            Demetrio Silva 
                                        </dd>
                                     </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">
                                            Teléfono(s)
                                        </dt>
                                        <dd>
                                            +52 (677) 377-2854
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    Mochis
                                </h3>
                                <dl class="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt class="sr-only">
                                            Contacto
                                        </dt>
                                        <dd>
                                            Karla Rochín
                                        </dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">
                                            Teléfono(s)
                                        </dt>
                                        <dd>
                                            +52 (668) 832-9863
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    Guamúchil
                                </h3>
                                <dl class="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt class="sr-only">
                                            Contacto
                                        </dt>
                                        <dd>
                                            María Dolores Urías
                                        </dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">
                                            Teléfono(s)
                                        </dt>
                                        <dd>
                                            +52 (673) 103-8327
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    Guasave
                                </h3>
                                <dl class="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt class="sr-only">
                                            Contacto
                                        </dt>
                                        <dd>
                                            Yoko Ono Parodi
                                        </dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">
                                            Teléfono(s)
                                        </dt>
                                        <dd>
                                            +52 (687) 174-7738
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>  
                </div>
                
                <footer class="bg-white">
                <img src={Imagen} class="max-w-5xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8" />
                </footer>


        </>
    )
}

