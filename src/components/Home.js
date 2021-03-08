import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/productos`)
            setProducts(info.data.products)
        }
        getProducts()
    }, [])

    console.log(products)
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
