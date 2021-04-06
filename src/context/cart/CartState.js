import React, {useReducer} from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import PRODUCT_SERVICE from '../../services/products'

import {
    AGREGAR_PRODUCTO,
    LIMPIAR_CART
 } from '../../types'

const CartState = props => {
    const initialState = {
        products: []
    }


    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addProducts = async(id) => {
        const response = await PRODUCT_SERVICE.DETAIL_PRODUCT(id)

        dispatch({
            type: AGREGAR_PRODUCTO,
            payload: response.data
        })
    }

    const limpiarCarro = async () => {
        dispatch({
            type: LIMPIAR_CART
        })
    }

    return (
        <CartContext.Provider value={{
            products: state.products,
            addProducts,
            limpiarCarro
        }}>
            {props.children}
        </CartContext.Provider> 
    )
}

export default CartState