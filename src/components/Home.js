import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const info = await axios.get('http://localhost:3001/productos')
            console.log(info)
            setProducts(info.data)
        }
        getProducts()
    }, [])

    return (
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
            
        </div>
    )
}
