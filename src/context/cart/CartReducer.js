import {
    AGREGAR_PRODUCTO,
    LIMPIAR_CART
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        
        case LIMPIAR_CART:
            return {
                products:[]
            }
        
        default: 
        return state
    }
}
