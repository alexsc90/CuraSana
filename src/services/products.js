import axios from 'axios'

const service = axios.create({
    baseURL: "https://curasana.herokuapp.com"
})

const PRODUCT_SERVICE = {
    DETAIL_PRODUCT: async (data) => {
        return await service.get(`/api/productos/${data}`)
    },
    CREATE_ORDER: async (data) => {
        return await service.post('/api/pedidos', data)
    },
    DELETE_ORDERS: async (data) => {
        return await service.delete(`/api/pedidos/${data}`)
    }
}

export default PRODUCT_SERVICE