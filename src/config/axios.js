import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: "https://curasana.herokuapp.com"
})

export default clienteAxios