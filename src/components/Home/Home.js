import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Logo from '../..//images/logo(1).png'

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const info = await axios.get('http://localhost:4000/productos')
            console.log(info)
            setProducts(info.data.products)
        }
        getProducts()
    }, [])

    return (
        <>
        <div class="bg-white">
            <img src={Logo} alt="logo" />
            <h1>CuraSana</h1>
            <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Nuestros productos</h2>
                <p class="text-xl text-gray-500">Todos nuestros productos están hechos con ingredientes 100% naturales</p>
            </div>
        
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            {
                products.map((e) => {
                    return(
                        <>      
                            <div class="space-y-12sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                            
                                <div class="space-y-4">
                                    <div class="aspect-w-3 aspect-h-2">
                                        <img class="object-cover shadow-lg rounded-lg" src={e.imageURL} alt="" />
                                    </div>

                                    <div class="space-y-2">
                                        <div class="text-lg leading-6 font-medium space-y-1">
                                            <h3>{e.name}</h3>
                                            <p class="text-indigo-600">Sabor: {e.flavor}</p>
                                        </div>
                                    </div>
                                </div>
                                        
                            </div>
                

                        </>
                    )
                })
            }
        

        </div>
        </div>
        {/* <div>
            <img src={Logo} alt="logo" />
        </div>
        <div>
        {
            products.map((e) => {
            return(
                <>
                <img width='100' src={e.imageURL} alt="img" />
                <p>{e.name} de {e.flavour}</p>
                <p>${e.price}</p>
                </>
            )
        })}
        </div> */}
        </>
    )
}
